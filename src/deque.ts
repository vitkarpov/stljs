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
  length = 0;

  push(val: T): T {
    const next = new Node<T>(val);

    this.length++;

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

    this.length--;

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
  unshift(val: T): T {
    const head = new Node<T>(val);

    this.length++;

    if (!this.head) {
      this.head = this.tail = head;
    } else {
      this.head.prev = head;
      head.next = this.head;
      this.head = head;
    }
    return val;
  }
  shift(): T {
    if (!this.head) {
      throw new RangeError('Cannot shift. Your container is empty.');
    }

    this.length--;

    if (this.head === this.tail) {
      const val = this.head.val;
      this.head = this.tail = undefined;
      return val;
    }
    const val = this.head.val;
    const next = this.head.next as Node<T>;
    next.prev = undefined;
    this.head = next;
    return val;
  }
  front() {
    if (!this.head) {
      throw new RangeError(
        'Cannot access the element. Your container is empty.'
      );
    }
    return this.head.val;
  }
  back() {
    if (!this.tail) {
      throw new RangeError(
        'Cannot access the element. Your container is empty.'
      );
    }
    return this.tail.val;
  }
  [Symbol.iterator]() {
    let curr = this.head;

    return {
      next() {
        const result = {
          value: curr && curr.val,
          done: !curr,
        };
        curr && (curr = curr.next);
        return result;
      },
    };
  }
}
