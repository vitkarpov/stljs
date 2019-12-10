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
  describe('shift & unshift scenarious', () => {
    it('test #0', () => {
      const deque = new Deque<number>();

      deque.push(1);
      deque.push(2);
      deque.unshift(3);

      expect(deque.head && deque.head.val).toBe(3);
    });
    it('test #1', () => {
      const deque = new Deque<number>();

      deque.push(1);
      deque.push(2);
      deque.shift();

      expect(deque.head && deque.head.val).toBe(2);
      expect(deque.tail && deque.tail.val).toBe(2);
    });
  });
  describe('#shift', () => {
    it('throws an error called on empty container', () => {
      const deque = new Deque<number>();

      expect(() => deque.shift()).toThrowError(
        'Cannot shift. Your container is empty.'
      );
    });
  });
  describe('#front', () => {
    it('throws an error called on empty container', () => {
      const deque = new Deque<number>();

      expect(() => deque.front()).toThrowError(
        'Cannot access the element. Your container is empty.'
      );
    });
    it('test #0', () => {
      const deque = new Deque<number>();

      deque.push(1);
      deque.push(2);
      deque.push(3);
      expect(deque.front()).toBe(1);
    });
  });
  describe('#back', () => {
    it('throws an error called on empty container', () => {
      const deque = new Deque<number>();

      expect(() => deque.back()).toThrowError(
        'Cannot access the element. Your container is empty.'
      );
    });
    it('test #0', () => {
      const deque = new Deque<number>();

      deque.push(1);
      deque.push(2);
      deque.push(3);
      expect(deque.back()).toBe(3);
    });
  });
  describe('#length', () => {
    it('test #0', () => {
      const deque = new Deque<number>();

      expect(deque.length).toBe(0);
    });
    it('test #1', () => {
      const deque = new Deque<number>();
      deque.push(1);
      deque.push(2);
      deque.push(3);

      expect(deque.length).toBe(3);
    });
    it('test #2', () => {
      const deque = new Deque<number>();
      deque.push(1);
      deque.push(2);
      deque.pop();
      deque.push(3);
      deque.unshift(4);
      deque.shift();
      deque.unshift(5);

      expect(deque.length).toBe(3);
    });
    it('test #3', () => {
      const deque = new Deque<number>();
      const result = [];
      deque.push(1);
      deque.push(2);
      deque.push(3);

      while (deque.length > 0) {
        result.push(deque.pop());
      }
      expect(result).toStrictEqual([3, 2, 1]);
    });
  });
  describe('iterators', () => {
    it('test #0', () => {
      const deque = new Deque<number>();
      const result = [];
      deque.push(1);
      deque.push(2);
      deque.push(3);

      for (const item of deque) {
        result.push(item);
      }
      expect(result).toStrictEqual([1, 2, 3, 4]);
    });
  });
});
