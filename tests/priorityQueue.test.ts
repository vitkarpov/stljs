import { PriorityQueue } from '../index';

describe('PriorityQueue', () => {
  describe('MaxHeap push & pop', () => {
    it('test #1', () => {
      const heap = new PriorityQueue<number>((a, b) => a - b > 0);

      heap.push(1);
      heap.push(10);
      heap.push(2);

      expect(heap.top()).toBe(10);
    });
    it('test #2', () => {
      const heap = new PriorityQueue<number>((a, b) => a - b > 0);

      heap.push(1);
      heap.push(10);
      heap.push(2);
      heap.pop();

      expect(heap.top()).toBe(2);
    });
  });
});
