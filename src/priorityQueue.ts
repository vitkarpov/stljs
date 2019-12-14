export interface IPriorityQueue<T> {
  top(): T;
  push(val: T): void;
  pop(): void;
}

export class PriorityQueue<T> implements IPriorityQueue<T> {
  constructor(comparator: (a: T, b: T) => boolean) {
    this.comparator = comparator;
  }

  top() {
    return this.q[0];
  }

  push(val: T) {
    this.q.push(val);
    this.bubbleUp();
  }

  pop() {
    if (this.q.length === 0) {
      throw new RangeError('Cannot pop. Your container is empty.');
    }
    this.q[0] = this.q.pop() as T;
    this.sinkDown(0);
  }

  size() {
    return this.q.length;
  }

  private q: T[] = [];
  private comparator: (a: T, b: T) => boolean;
  private bubbleUp() {
    let curr = this.q.length - 1;

    while (curr > 0) {
      const next = Math.floor((curr - 1) / 2);
      const val = this.q[curr];
      const parent = this.q[next];

      if (this.comparator(parent, val)) {
        break;
      }
      this.q[curr] = parent;
      this.q[next] = val;
      curr = next;
    }
  }
  private sinkDown(max: number) {
    const left = 2 * max + 1;
    const right = 2 * max + 2;
    let curr = max;

    if (left <= this.q.length && this.comparator(this.q[left], this.q[curr])) {
      curr = left;
    }
    if (
      right <= this.q.length &&
      this.comparator(this.q[right], this.q[curr])
    ) {
      curr = right;
    }
    if (curr !== max) {
      [this.q[curr], this.q[max]] = [this.q[max], this.q[curr]];
      this.sinkDown(curr);
    }
  }
}
