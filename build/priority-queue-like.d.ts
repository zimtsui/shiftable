export interface PriorityQueueLike<T> extends IterableIterator<T> {
    push(x: T): void;
    shift(): T;
    getFront(): T;
}
export declare class NoEnoughElem extends Error {
    constructor();
}
