import {
	QueueLike,
	Defined,
	NoEnoughElem,
} from 'deque/build/queue-like';
import { SortedQueue, SortedQueueItem } from 'sorted-queue';
import { Removable } from './iterators';
import assert = require('assert');


export class Sortque<T extends Defined> implements QueueLike<T>{
	private sQ = new SortedQueue<T>();
	private length = 0;

	public push(item: T): Sortque.Pointer<T> {
		this.length += 1;
		const sQPointer = this.sQ.push(item);
		return new Sortque.Pointer(sQPointer);
	}

	public getLength(): number {
		return this.length;
	}

	public getFront(): T {
		assert(
			this.length > 0,
			new NoEnoughElem(),
		);
		return this.sQ.peek()!.value;
	}

	public shift(): T {
		const item = this.getFront();
		this.sQ.pop();
		return item;
	}
}

export namespace Sortque {
	export class Pointer<T> implements Removable<T>{
		private removed = false;

		public constructor(
			private p: SortedQueueItem<T>,
		) { }

		public getValue(): T {
			return this.getValue();
		}

		public remove(): void {
			assert(!this.removed);
			this.p.pop();
			this.removed = true;
		}
	}

}

export {
	QueueLike,
	Defined,
	NoEnoughElem,
	Removable,
}
