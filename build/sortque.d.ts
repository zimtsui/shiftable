import { QueueLike, Defined, NoEnoughElem } from 'deque';
import { SortedQueueItem } from 'sorted-queue';
import { Removable } from './iterators';
export declare class Sortque<T extends Defined> implements QueueLike<T> {
    private sQ;
    private length;
    constructor(cmp?: (a: T, b: T) => number);
    push(item: T): Sortque.Pointer<T>;
    getLength(): number;
    getFront(): T;
    shift(): T;
}
export declare namespace Sortque {
    class Pointer<T extends Defined> implements Removable<T> {
        private p;
        private removed;
        constructor(p: SortedQueueItem<T>);
        deref(): T;
        remove(): void;
    }
}
export { QueueLike, Defined, NoEnoughElem, Removable, };
