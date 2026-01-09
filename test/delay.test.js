// Import Node's built-in test runner
import test from 'node:test';
// Import strict assertion library
import assert from 'node:assert/strict';
// Import the delay function we want to test
import delay from '../index.js';

// ✅ Test: default unit is milliseconds
test('delay defaults to milliseconds', async () => {
  const start = Date.now();          // record start time
  await delay(100);                  // wait for 100 ms (default unit)
  const elapsed = Date.now() - start; // calculate elapsed time
  console.log(`Default (milliseconds): waited ~ ${elapsed} ms`);
  assert(elapsed >= 100);            // ensure at least 100 ms passed
});

// ✅ Test: delay works with seconds
test('delay works with seconds', async () => {
  const start = Date.now();
  await delay(1, 'seconds');         // wait for 1 second
  const elapsed = Date.now() - start;
  console.log(`Seconds: waited ~ ${elapsed} ms`);
  assert(elapsed >= 1000);           // ensure at least 1000 ms passed
});

// ✅ Test: delay works with minutes
test('delay works with minutes', async () => {
  const start = Date.now();
  await delay(0.01, 'minutes');      // 0.01 minutes = 600 ms
  const elapsed = Date.now() - start;
  console.log(`Minutes (0.01): waited ~ ${elapsed} ms`);
  assert(elapsed >= 600);            // ensure at least 600 ms passed
});

// ✅ Test: delay works with hours
test('delay works with hours', async () => {
  const start = Date.now();
  await delay(1 / 3600, 'hours');    // 1/3600 hours = 1 second
  const elapsed = Date.now() - start;
  console.log(`Hours (1/3600): waited ~ ${elapsed} ms`);
  assert(elapsed >= 1000);           // ensure at least 1000 ms passed
});

// ✅ Test: delay always returns a Promise
test('delay returns a Promise', async () => {
  const result = delay(1000);          // call delay
  assert(result instanceof Promise); // check return type
});
