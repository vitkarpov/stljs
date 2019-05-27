const { Deque } = require('../build');
const benchmark = require('benchmarkjs');

benchmark.options({
    verbose: true,
    testTime: 4000
});

const N = 10000;
const arr = new Array(N).fill(0);
const deq = new Deque();
while (deq.length < N) {
  deq.push(0);
}

benchmark('array shift', function () {
  while (arr.length) {
    arr.shift();
  }
});
benchmark('deque shift', function () {
  while (deq.length) {
    deq.shift();
  }
});

console.log(benchmark.results);
