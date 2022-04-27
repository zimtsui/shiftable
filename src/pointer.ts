import { SortedQueueItem } from 'sorted-queue';
import assert = require('assert');


export interface PointerLike<T> {
	deref(): T;
}

export interface Removable<T> extends PointerLike<T> {
	remove(): void;
	isRemoved(): boolean;
}

export class Pointer<T> implements Removable<T>{
	private removed = false;

	public constructor(
		private p: SortedQueueItem<T>,
	) { }

	public isRemoved(): boolean {
		return this.removed;
	}

	public deref(): T {
		return this.p.value;
	}

	public remove(): void {
		assert(!this.removed);
		this.p.pop();
		this.removed = true;
	}
}
