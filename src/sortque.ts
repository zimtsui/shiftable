import { Heap, Pointer } from 'binary-heap';
import { sortMerge } from './merge';

export {
	AlreadyRemoved,
	NoEnoughElem,
	Pointer,
} from 'binary-heap';


export class Sortque<T> implements IterableIterator<T>{
	private heap: Heap<T>;
	// null 表示 fill 记录以清空
	private lastFilled: null | Pointer<T> = null;
	private sorted: Iterator<T> | null = null;

	public constructor(
		private cmp: (x1: T, x2: T) => boolean,
	) {
		this.heap = new Heap(cmp);
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
		if (this.sorted === null) {
			this.sorted = sorted;
			return;
		}
		this.sorted = sortMerge<T>(this.cmp)(
			this.sorted,
			sorted,
		);
		this.lastFilled = null;
	}

	private tryFill(): void {
		if (this.sorted === null) return;
		if (this.lastFilled && !this.lastFilled.isRemoved()) return;
		const r = this.sorted.next();
		if (!r.done)
			this.lastFilled = this.heap.push(r.value);
		else
			this.sorted = null;
	}

	public getFront(): T {
		this.tryFill();
		return this.heap.getFront();
	}

	public shift(): T {
		this.tryFill();
		return this.heap.shift();
	}
}
