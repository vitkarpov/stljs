export class Deque<T> {
  private q: T[] = [];
  private start = 0;
  private end = 0;

  get length() {
    return this.end - this.start;
  }
  push(val: T): T {
    if (!this.length) {
      this.q[this.start] = val;
    }
    this.q[++this.end] = val;
    return val;
  }
  pop(): T {
    if (!this.length) {
      throw new RangeError('Cannot pop. Your container is empty.');
    }
    return this.q[this.end--];
  }
  unshift(val: T): T {
    if (!this.length) {
      this.q[this.end] = val;
    }
    this.q[--this.start] = val;
    return val;
  }
  shift(): T {
    if (!this.length) {
      throw new RangeError('Cannot shift. Your container is empty.');
    }
    return this.q[this.start++];
  }
  front() {
    if (!this.length) {
      throw new RangeError(
        'Cannot access the element. Your container is empty.'
      );
    }
    if (this.end - this.start === 1) {
      return this.q[this.end];
    }
    return this.q[this.start];
  }
  back() {
    if (!this.length) {
      throw new RangeError(
        'Cannot access the element. Your container is empty.'
      );
    }
    return this.q[this.end];
  }
  at(pos: number) {
    if (this.start + 1 + pos > this.end) {
      throw new RangeError(
        'Cannot access the element. Position is out of range.'
      );
    }
    return this.q[this.start + 1 + pos];
  }
}
