const { performance } = require("perf_hooks");

const smArr = [5, 3, 8, 35, 2];

const bigArr = [
  5,
  3,
  8,
  35,
  2,
  5,
  3,
  8,
  35,
  2,
  5,
  3,
  8,
  35,
  2,
  2,
  5,
  3,
  2,
  35,
  2,
  5,
  3,
  2,
  35,
  2,
  5,
  3,
  2,
  35,
  2,
  5,
  3,
  2,
  35,
  2,
  5,
  3,
  2,
  35,
  2,
  5,
  3,
  2,
  35,
  2,
  5,
  3,
  2,
  35,
  2,
];

async function productOfNum(n) {
  let num = n;

  if (num === 0) return 1;
  for (let i = 0; i < n; i++) {
    num = n * productOfNum(n - 1);
  }
  const end = performance.now();
  return num;
}

async function go() {
  const start = performance.now();
  const product = await productOfNum(12);
  const end = performance.now();
  console.log(`Time: ${end - start} Milliseconds`);
}

go();
