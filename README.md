# STL.js

![](./assets/stl.png)

**Standard Template Library for {Type,Java}Script projects**

## Why?

Have you ever been in a situation where you need to use a deque but you don't have such a thing in JavaScript?
"Why don't you use an array?", they might ask. I'd like to give an answer: **time complexity**

Let's take a look at the deque example. It has `O(1)` for `{push,pop}_{front,back}` (C++ API) operations, in a word, it's a doubly linked list and you can push and pop items to boths ends fast. You can't take an arbitrary element by index as you can do with arrays, and that's the price you pay. That's fine since you don't need to, doubly linked lists serve the different purpose.

What's about `unshift` complexity of `Array` in V8? Benchmarks show it's significantly slower than `push`. It moves the elements to relayout memory, as you might expect, it's `O(n)` in worst case.

## Deque

Compliant with **JavaScript Array API**.

### Benchmarks 🚀

`Array#unshift` works in `O(n)` time and `Deque#unshift` works in `O(1)` time, check out the benchmarks:

| Name          | Total iterations | Iterations per second  |
| ------------- | ---------------- | ---------------------- |
| deque#unshift | 46,938           | 10,672                 |
| array#unshift |    325           |     74                 |

`Array#shift` is optimized though, works **faster** than `Deque#shift` on ~20%:

| Name          | Total iterations | Iterations per second  |
| ------------- | ---------------- | ---------------------- |
| array#shift   | 2,785,723,217    | 633,983,435            |
| deque#shift   | 2,263,189,082    | 515,650,280            |

`Array#push` and `Array#pop` works faster as expected:

| Name          | Total iterations | Iterations per second  |
| ------------- | ---------------- | ---------------------- |
| array#push    | 55,567           | 13,214                 |
| deque#push    | 23,356           |  5,278                 |

| Name          | Total iterations | Iterations per second  |
| ------------- | ---------------- | ---------------------- |
| array#pop     | 1,712,950,723    | 1,334,438,329          |
| deque#pop     |   388,688,614    |   301,159,631          |

> Note: tests run ~4s on 10.000 items

### API

#### push

```ts
import { Deque } from 'stljs';
const deque = new Deque<number>()
deque.push(1);
// 1
deque.back();
```

#### pop

```ts
import { Deque } from 'stljs';
const deque = new Deque<number>()
deque.push(1);
// 1
deque.pop();
```

#### unshift

```ts
import { Deque } from 'stljs';
const deque = new Deque<number>()
deque.push(2);
deque.push(3);
deque.unshift(1);
// 1
deque.front();
```

#### shift

```ts
import { Deque } from 'stljs';
const deque = new Deque<number>()
deque.push(1);
deque.push(2);
deque.push(3);
// 1
deque.shift();
```

#### length

```ts
import { Deque } from 'stljs';
const deque = new Deque<number>()
deque.push(1);
deque.push(2);
deque.push(3);

while (deque.length > 0) {
  // 3, 2, 1
  deque.pop();
}
```
