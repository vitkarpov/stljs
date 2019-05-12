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
      this.tail = next;
    } else {
      this.tail.next = next;
      this.tail = this.tail.next;
    }
    return this.tail.val;
  }
}
