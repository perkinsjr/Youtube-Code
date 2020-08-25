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

const smallStart = performance.now();
smArr.forEach((item) => console.log(item));
const smallEnd = performance.now();
console.log(`Time: ${smallEnd - smallStart}`);

const bigStart = performance.now();
bigArr.forEach((item) => console.log(item));
const bigEnd = performance.now();
console.log(`Time: ${bigEnd - bigStart}`);
