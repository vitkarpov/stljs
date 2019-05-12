"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Node {
    constructor(val) {
        this.val = val;
    }
}
class Deque {
    push(val) {
        const next = new Node(val);
        if (!this.tail) {
            this.tail = next;
        }
        else {
            this.tail.next = next;
            this.tail = this.tail.next;
        }
        return this.tail.val;
    }
}
exports.Deque = Deque;
//# sourceMappingURL=deque.js.map