import { SortedQueue } from 'sorted-queue';
import {
	Removable,
	Pointer,
} from './pointer';
import {
	PriorityQueueLike,
	NoEnoughElem,
} from './priority-queue-like';
import assert = require('assert');


export type Defined = null | number | symbol | string | object | boolean;

export class Sortque<T extends Defined> implements PriorityQueueLike<T>{
	private sQ: SortedQueue<T>;
	private initialPointer: null | Removable<T> = null;

	public constructor(
		private sortedInitials: Iterator<T>,
		private cmp: (a: T, b: T) => number,
	) {
		this.sQ = new SortedQueue(cmp);
	}

	public [Symbol.iterator]() {
		return this;
	}

	public next(): IteratorResult<T, void> {
		try {
			return {
				done: false,
				value: this.shift(),
			}
		} catch (err) {
			return {
				done: true,
				value: void null,
			}
		}
	}

	public push(x: T): Removable<T> {
		const sQPointer = this.sQ.push(x);
		return new Pointer(sQPointer);
	}

	public getFront(): T {
		if (
			this.initialPointer === null ||
			this.initialPointer.isRemoved()
		) {
			const r = this.sortedInitials.next();
			if (!r.done) {
				if (this.initialPointer !== null)
					assert(this.cmp(
						r.value,
						this.initialPointer.deref(),
					) >= 0);
				this.initialPointer = this.push(r.value);
			}
		}
		const item = this.sQ.peek();
		assert(
			typeof item !== 'undefined',
			new NoEnoughElem(),
		);
		return item.value;
	}

	public shift(): T {
		const item = this.getFront();
		this.sQ.pop();
		return item;
	}
}
