import { Shiftable } from './shiftable';
import assert = require('assert');


export class ShiftableFromIterator<T> implements Shiftable<T> {
	public constructor(
		private it: Iterator<T>,
		private r: IteratorResult<T>,
	) { }

	public i(index: 0): T {
		assert(
			!this.r.done,
			new RangeError(),
		);
		return this.r.value;
	}

	public shift(): T {
		const x = this.i(0);
		this.r = this.it.next();
		return x;
	}
}
