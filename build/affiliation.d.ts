import { Cmp } from '@zimtsui/binary-heap';
import { Shiftable } from './shiftable';
export declare class Affiliation<T> implements Shiftable<T>, Iterable<T> {
    private cmp;
    private master;
    private slave;
    constructor(cmp: Cmp<T>, master: Shiftable<T>, slave: Shiftable<T>);
    i(index: 0): T;
    shift(): T;
    [Symbol.iterator](): Generator<T, void, unknown>;
}
