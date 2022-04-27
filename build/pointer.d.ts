import { SortedQueueItem } from 'sorted-queue';
export interface PointerLike<T> {
    deref(): T;
}
export interface Removable<T> extends PointerLike<T> {
    remove(): void;
    isRemoved(): boolean;
}
export declare class Pointer<T> implements Removable<T> {
    private p;
    private removed;
    constructor(p: SortedQueueItem<T>);
    isRemoved(): boolean;
    deref(): T;
    remove(): void;
}
