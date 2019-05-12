declare class Node<T> {
    val: T;
    next?: Node<T>;
    prev?: Node<T>;
    constructor(val: T);
}
export declare class Deque<T> {
    head?: Node<T>;
    tail?: Node<T>;
    push(val: T): T;
}
export {};
