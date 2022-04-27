export interface PriorityQueueLike<T> extends IterableIterator<T> {
	push(x: T): void;
	shift(): T;
	getFront(): T;
}

export class NoEnoughElem extends Error {
	public constructor() {
		super('No enough elements.');
	}
}
