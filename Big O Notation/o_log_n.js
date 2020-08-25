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

async function sort(array) {
  if (array.length < 2) return array;

  let pivot = array[0];
  let left = [];
  let right = [];

  for (let i = 1, total = array.length; i < total; i++) {
    if (array[i] < pivot) left.push(array[i]);
    else right.push(array[i]);
  }
  return "DONE";
}

async function go() {
  const start = performance.now();
  await sort(bigArr);
  const end = performance.now();
  console.log(`Time: ${end - start} Milliseconds`);
}
go();
