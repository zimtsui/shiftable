import { Shiftable } from './shiftable';
export declare class Shifterator<T> implements Shiftable<T> {
    private it;
    private r;
    private constructor();
    static fromIterable<T>(iterable: Iterable<T>): Shiftable<T>;
    static fromIterator<T>(it: Iterator<T>, r: IteratorResult<T>): Shiftable<T>;
    i(index: 0): T;
    shift(): T;
}
