import { Shiftable } from './shiftable';
import assert = require('assert');


export class Shifterator<T> implements Shiftable<T> {
	private constructor(
		private it: Iterator<T>,
		private r: IteratorResult<T>,
	) { }

	public static fromIterable<T>(iterable: Iterable<T>): Shiftable<T> {
		const it = iterable[Symbol.iterator]();
		return new Shifterator(
			it,
			it.next(),
		);
	}

	public static fromIterator<T>(
		it: Iterator<T>,
		r: IteratorResult<T>,
	): Shiftable<T> {
		return new Shifterator<T>(it, r);
	}

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
