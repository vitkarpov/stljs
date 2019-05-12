import { Deque } from '../index';

describe('Deque', () => {
  const tests = [
    {
      /**
       * Put here Deque.prototype methods
       * which is called in this particular order during the test.
       */
      methods: [Deque.prototype.push],
      /**
       * Put here arguments for methods specified above.
       */
      args: [1],
      /**
       * Define expect function which takes deque.
       * You might check some state using jest's expect.
       */
      expect: (deque: Deque<number>) => {
        expect(deque.head && deque.head.val).toEqual(1);
        expect(deque.tail && deque.tail.val).toEqual(1);
      },
    },
    {
      methods: [
        Deque.prototype.push,
        Deque.prototype.push,
        Deque.prototype.push,
      ],
      args: [1, 2, 3],
      expect: (deque: Deque<number>) => {
        expect(deque.head && deque.head.val).toEqual(1);
        expect(deque.tail && deque.tail.val).toEqual(3);
      },
    },
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
