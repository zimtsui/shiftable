import { Cmp } from '@zimtsui/binary-heap';
import { Shiftable } from './shiftable';
export declare class Merged<T> implements Shiftable<T>, Iterable<T> {
    private cmp;
    private s1;
    private s2;
    constructor(cmp: Cmp<T>, s1: Shiftable<T>, s2: Shiftable<T>);
    i(index: 0): T;
    shift(): T;
    [Symbol.iterator](): Generator<T, void, unknown>;
}
