import { Deque } from '../index';

describe('Deque', () => {
  const tests = [
    {
      methods: [Deque.prototype.push],
      args: [1],
      expect: (deque: Deque<number>) => expect(deque.tail && deque.tail.val).toEqual(1)
    }
  ];
  tests.forEach(({ methods, args, expect }, i) => {
    it(`test #${i}`, () => {
      const deque = new Deque<number>();

      methods.forEach((method, i) => {
        method.call(deque, args[i]);
      });
      expect(deque);
    });
  });
});
