/** Check the host stdio transport against the application's bundled flood dataset. */
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { createInterface } from 'node:readline';
import { fileURLToPath } from 'node:url';

const script = fileURLToPath(
  new URL('../server/mcp/stdio.js', import.meta.url),
);
const child = spawn(process.execPath, [script, ...process.argv.slice(2)], {
  stdio: ['pipe', 'pipe', 'inherit'],
});
const lines = createInterface({ input: child.stdout, crlfDelay: Infinity });
const replies = lines[Symbol.asyncIterator]();
const timer = setTimeout(() => child.kill(), 30_000);
function send(message) {
  child.stdin.write(JSON.stringify({ jsonrpc: '2.0', ...message }) + '\n');
}
async function call(id, method, params) {
  send({ id, method, params });
  const { value, done } = await replies.next();
  assert.ok(!done, 'MCP process exited before replying to ' + method);
  const reply = JSON.parse(value);
  assert.equal(reply.id, id);
  assert.ok(
    !reply.error && !reply.result?.isError,
    method +
      ' failed. Check that the host app is running and --api-base points to it.',
  );
  return reply.result;
}
try {
  const init = await call(1, 'initialize', {
    protocolVersion: '2025-06-18',
    capabilities: {},
    clientInfo: { name: 'gev-connectivity-check', version: '1' },
  });
  assert.equal(init.serverInfo.name, 'gods-eye-view');
  send({ method: 'notifications/initialized' });
  const list = await call(2, 'tools/list', {});
  const tool = list.tools.find((t) => t.name === 'get_bhote_koshi_flood');
  assert.equal(tool?.annotations?.readOnlyHint, true);
  const response = await call(3, 'tools/call', {
    name: tool.name,
    arguments: {},
  });
  assert.equal(response.structuredContent.id, 'bhote-koshi-2026');
  console.log(
    'Host stdio connected. Discovered ' +
      list.tools.length +
      ' tools and read the local flood dataset.',
  );
} finally {
  clearTimeout(timer);
  child.stdin.end();
  lines.close();
  child.kill();
}
