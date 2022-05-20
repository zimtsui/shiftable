import { PointerLike, Cmp } from 'binary-heap';
export declare class Sortque<T> implements IterableIterator<T> {
    private cmp;
    private heap;
    private r;
    private sortedIt;
    constructor(cmp: Cmp<T>, sortedSeq?: Iterable<T>);
    [Symbol.iterator](): this;
    next(): IteratorResult<T, void>;
    push(x: T): PointerLike<T>;
    pushSorted(sortedSeq: Iterable<T>): void;
    /**
     * @throws RangeError
     */
    getFront(): T;
    private shiftUndoneSorted;
    /**
     * @throws RangeError
     */
    shift(): T;
    /**
     * @returns 0 or Number.POSITIVE_INFINITY.
     */
    getSize(): number;
}
