import {
	SortedQueue,
} from 'sorted-queue';
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
	private initialPoint: null | Removable<T> = null;

	protected constructor(
		private initials: Iterator<T>,
		cmp?: (a: T, b: T) => number,
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
			this.initialPoint === null ||
			this.initialPoint.isRemoved()
		) {
			const r = this.initials.next();
			if (!r.done)
				this.initialPoint = this.push(r.value);
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
