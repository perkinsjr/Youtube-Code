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

const arr2 = [35, 2, 2, 8];

const smallStart = performance.now();
smArr.forEach(() => {
  arr2.forEach((item) => console.log(item));
});
const smallEnd = performance.now();
console.log(`Small Time: ${smallEnd - smallStart}`);

const bigStart = performance.now();
bigArr.forEach(() => {
  arr2.forEach((item) => console.log(item));
});
const bigEnd = performance.now();
console.log(` Big Time: ${bigEnd - bigStart}`);
