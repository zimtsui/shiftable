import { Shiftable } from './shiftable';
export declare class Shifterator<T> implements Shiftable<T> {
    private it;
    private r;
    constructor(it: Iterator<T>, r: IteratorResult<T>);
    static fromIterable<T>(iterable: Iterable<T>): Shifterator<T>;
    i(index: 0): T;
    shift(): T;
}
