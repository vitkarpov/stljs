const { Deque } = require('../build');
const benchmark = require('benchmarkjs');

benchmark.options({
    verbose: true,
    testTime: 4000
});

const N = 10000;

benchmark('array push', function () {
  const arr = [];

  for (let i = 0; i < N; i++) {
    arr.push(i);
  }
});
benchmark('deque push', function () {
  const arr = new Deque();

  for (let i = 0; i < N; i++) {
    arr.push(i);
  }
});

console.log(benchmark.results);
