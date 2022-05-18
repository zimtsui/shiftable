import {
	Heap, Pointer,
	Cmp,
} from 'binary-heap';
import { sortMerge2 } from './merge';


export class Sortque<T> implements IterableIterator<T>{
	private heap: Heap<T>;
	private r: IteratorResult<T>;

	public constructor(
		private cmp: Cmp<T>,
		private sorted: Iterator<T> = (function* () { })(),
	) {
		this.heap = new Heap(cmp);
		this.r = this.sorted.next();
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

	public push(x: T): Pointer<T> {
		return this.heap.push(x);
	}

	public pushSorted(sorted: Iterator<T>): void {
		if (!this.r.done) {
			this.heap.push(this.r.value);
			this.sorted = sortMerge2(this.cmp)(
				this.sorted,
				sorted,
			);
		} else
			this.sorted = sorted;
		this.shiftUndoneSorted();
	}

	public getFront(): T {
		if (this.r.done) return this.heap.getFront();
		if (this.heap.getSize() === 0) return this.r.value;
		return this.cmp(this.heap.getFront(), this.r.value) <= 0
			? this.heap.getFront()
			: this.r.value;
	}

	private shiftUndoneSorted(): T {
		const x = this.r.value;
		this.r = this.sorted.next();
		return x;
	}

	public shift(): T {
		if (this.r.done) return this.heap.shift();
		if (this.heap.getSize() === 0) return this.shiftUndoneSorted();
		if (this.cmp(this.heap.getFront(), this.r.value) <= 0)
			return this.heap.shift();
		else
			return this.shiftUndoneSorted();
	}

	public getSize(): number {
		if (this.r.done && this.heap.getSize() === 0) return 0;
		return Number.POSITIVE_INFINITY;
	}
}
