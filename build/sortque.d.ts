import { Pointer, Cmp } from 'binary-heap';
export declare class Sortque<T> implements IterableIterator<T> {
    private cmp;
    private sorted;
    private heap;
    private r;
    constructor(cmp: Cmp<T>, sorted?: Iterator<T>);
    [Symbol.iterator](): this;
    next(): IteratorResult<T, void>;
    push(x: T): Pointer<T>;
    pushSorted(sorted: Iterator<T>): void;
    getFront(): T;
    private shiftUndoneSorted;
    shift(): T;
    getSize(): number;
}
