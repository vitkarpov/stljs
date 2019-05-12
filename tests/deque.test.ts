import { Deque } from '../index';

describe('Deque', () => {
  describe('push & pop scenarious', () => {
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
      {
        methods: [
          Deque.prototype.push,
          Deque.prototype.push,
          Deque.prototype.push,
          Deque.prototype.pop,
          Deque.prototype.pop,
        ],
        args: [1, 2, 3, null, null],
        expect: (deque: Deque<number>) => {
          expect(deque.head && deque.head.val).toEqual(1);
          expect(deque.tail && deque.tail.val).toEqual(1);
        },
      },
      {
        methods: [
          Deque.prototype.push,
          Deque.prototype.push,
          Deque.prototype.pop,
          Deque.prototype.push,
          Deque.prototype.pop,
          Deque.prototype.push,
        ],
        args: [1, 2, null, 3, null, 4],
        expect: (deque: Deque<number>) => {
          expect(deque.head && deque.head.val).toEqual(1);
          expect(deque.tail && deque.tail.val).toEqual(4);
        },
      },
    ];
    tests.forEach(({ methods, args, expect }, i) => {
      it(`test #${i}`, () => {
        const deque = new Deque<number>();

        methods.forEach((method, i) => {
          // pop doesn't take any arguments
          if (method === Deque.prototype.pop) {
            deque.pop();
          } else {
            method.call(deque, args[i]);
          }
        });
        expect(deque);
      });
    });
  });
  describe('#pop', () => {
    it('throws an error called on empty container', () => {
      const deque = new Deque<number>();

      expect(() => deque.pop()).toThrowError(
        'Cannot pop. Your container is empty.'
      );
    });
  });
});
