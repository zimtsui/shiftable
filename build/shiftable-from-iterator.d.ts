import { Shiftable } from './shiftable';
export declare class ShiftableFromIterator<T> implements Shiftable<T> {
    private it;
    private r;
    constructor(it: Iterator<T>, r: IteratorResult<T>);
    i(index: 0): T;
    shift(): T;
}
