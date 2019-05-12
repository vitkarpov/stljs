import { Deque } from '../index';

describe('Deque', () => {
  describe('#push', () => {
    it("returns the new tail's value", () => {
      const deque = new Deque<number>();
      expect(deque.push(1)).toEqual(1);
    });
  });
});
