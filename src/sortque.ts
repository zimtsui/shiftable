import {
	QueueLike,
	Defined,
	NoEnoughElem,
	ZeroElemShifted,
} from 'deque/build/queue-like';
import { SortedQueue } from 'sorted-queue';
import assert = require('assert');


export class SortQue<T extends Defined> implements QueueLike<T>{
	private q = new SortedQueue<T>();
	private length = 0;

	public push(...items: T[]): void {
		for (const item of items)
			this.q.push(item);
		this.length += items.length;
	}

	public getLength(): number {
		return this.length;
	}

	public getFront(): T {
		assert(
			this.length >= 1,
			new NoEnoughElem(),
		);
		return this.q.peek()!.value;
	}

	public shift(count = 1): T {
		assert(
			count >= 1,
			new ZeroElemShifted(),
		);
		const item = this.getFront();
		this.q.pop();
		return item;
	}
}

export {
	QueueLike,
	Defined,
	NoEnoughElem,
	ZeroElemShifted,
}
