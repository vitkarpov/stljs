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

benchmark('array pop', function () {
  while (arr.length) {
    arr.pop();
  }
});
benchmark('deque pop', function () {
  while (deq.length) {
    deq.pop();
  }
});

console.log(benchmark.results);
