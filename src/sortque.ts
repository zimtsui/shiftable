import {
	Heap, PointerLike,
	Cmp,
} from 'binary-heap';
import { sortMerge2 } from './merge';
import { Seq } from './seq';


export class Sortque<T> implements IterableIterator<T>{
	private heap: Heap<T>;
	private r: IteratorResult<T>;
	private sortedIt: Iterator<T>;

	public constructor(
		private cmp: Cmp<T>,
		sortedSeq: Iterable<T> = [],
	) {
		this.heap = new Heap(cmp);
		this.sortedIt = sortedSeq[Symbol.iterator]();
		this.r = this.sortedIt.next();
	}

	public [Symbol.iterator]() {
		return this;
	}

	public next(): IteratorResult<T, void> {
		try {
			return {
				done: false,
				value: this.shift(),
			};
		} catch (err) {
			return {
				done: true,
				value: void null,
			};
		}
	}

	public push(x: T): PointerLike<T> {
		return this.heap.push(x);
	}

	public pushSorted(sortedSeq: Iterable<T>): void {
		if (!this.r.done) {
			this.heap.push(this.r.value);
			this.sortedIt = sortMerge2(this.cmp)(
				new Seq(this.sortedIt),
				sortedSeq,
			)[Symbol.iterator]();
		} else
			this.sortedIt = sortedSeq[Symbol.iterator]();
		this.shiftUndoneSorted();
	}

	/**
	 * @throws RangeError
	 */
	public getFront(): T {
		if (this.r.done) return this.heap.getFront();
		if (this.heap.getSize() === 0) return this.r.value;
		return this.cmp(this.heap.getFront(), this.r.value) <= 0
			? this.heap.getFront()
			: this.r.value;
	}

	private shiftUndoneSorted(): T {
		const x = this.r.value;
		this.r = this.sortedIt.next();
		return x;
	}

	/**
	 * @throws RangeError
	 */
	public shift(): T {
		if (this.r.done) return this.heap.shift();
		if (this.heap.getSize() === 0) return this.shiftUndoneSorted();
		if (this.cmp(this.heap.getFront(), this.r.value) <= 0)
			return this.heap.shift();
		else
			return this.shiftUndoneSorted();
	}

	/**
	 * @returns 0 or Number.POSITIVE_INFINITY.
	 */
	public getSize(): number {
		if (this.r.done && this.heap.getSize() === 0) return 0;
		return Number.POSITIVE_INFINITY;
	}
}
