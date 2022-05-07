import { Pointer } from 'binary-heap';
export { AlreadyRemoved, NoEnoughElem, Pointer, } from 'binary-heap';
export declare class Sortque<T> implements IterableIterator<T> {
    private cmp;
    private heap;
    private lastFilled;
    private sorted;
    constructor(cmp: (x1: T, x2: T) => boolean);
    [Symbol.iterator](): this;
    next(): IteratorResult<T, void>;
    push(x: T): Pointer<T>;
    pushSorted(sorted: Iterator<T>): void;
    private tryFill;
    getFront(): T;
    shift(): T;
}
