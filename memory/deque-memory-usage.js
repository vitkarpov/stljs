const {Deque} = require('../build');

const N = 1000000000;
const d = new Deque();

for (let i = 0; i < N; i++) {
  if (i % 2 === 0) {
    d.unshift(1);
  } else {
    d.shift();
  }
}

const used = process.memoryUsage();
for (let key in used) {
  console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
}
