class Node<T> {
  val: T;
  next?: Node<T>;
  prev?: Node<T>;

  constructor(val: T) {
    this.val = val;
  }
}

export class Deque<T> {
  head?: Node<T>;
  tail?: Node<T>;

  push(val: T): T {
    const next = new Node<T>(val);

    if (!this.tail) {
      this.head = this.tail = next;
    } else {
      this.tail.next = next;
      next.prev = this.tail;
      this.tail = this.tail.next;
    }
    return this.tail.val;
  }
  pop(): T {
    if (!this.tail) {
      throw new RangeError('Cannot pop. Your container is empty.');
    }
    if (this.head === this.tail) {
      const val = this.tail.val;
      this.head = this.tail = undefined;
      return val;
    }
    const val = this.tail.val;
    const prev = this.tail.prev as Node<T>;
    prev.next = undefined;
    this.tail = prev;
    return val;
  }
}
