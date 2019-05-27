const { Deque } = require('../build');
const benchmark = require('benchmarkjs');

benchmark.options({
    verbose: true,
    testTime: 4000
});

const N = 10000;

benchmark('array unshift', function () {
  const arr = [];
  for (let i = 0; i < N; i++) {
    arr.unshift(i);
  }
});
benchmark('deque unshift', function () {
  const arr = new Deque();
  for (let i = 0; i < N; i++) {
    arr.unshift(i);
  }
});

console.log(benchmark.results);
