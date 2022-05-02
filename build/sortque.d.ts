import { Removable } from './pointer';
import { PriorityQueueLike } from './priority-queue-like';
export declare type Defined = null | number | symbol | string | object | boolean;
export declare class Sortque<T extends Defined> implements PriorityQueueLike<T> {
    private sortedInitials;
    private cmp;
    private sQ;
    private initialPointer;
    constructor(sortedInitials: Iterator<T>, cmp: (a: T, b: T) => number);
    [Symbol.iterator](): this;
    next(): IteratorResult<T, void>;
    push(x: T): Removable<T>;
    getFront(): T;
    shift(): T;
}
