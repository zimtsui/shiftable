import { QueueLike, Defined, NoEnoughElem } from 'deque/build/queue-like';
import { SortedQueueItem } from 'sorted-queue';
import { Removable } from './iterators';
export declare class Sortque<T extends Defined> implements QueueLike<T> {
    private sQ;
    private length;
    push(item: T): Sortque.Pointer<T>;
    getLength(): number;
    getFront(): T;
    shift(): T;
}
export declare namespace Sortque {
    class Pointer<T> implements Removable<T> {
        private p;
        private removed;
        constructor(p: SortedQueueItem<T>);
        getValue(): T;
        remove(): void;
    }
}
export { QueueLike, Defined, NoEnoughElem, Removable, };
