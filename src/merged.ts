import { Cmp } from './cmp';
import { Shiftable } from './shiftable';


export class Merged<T> implements Shiftable<T>, Iterable<T>{
	public constructor(
		private cmp: Cmp<T>,
		private s1: Shiftable<T>,
		private s2: Shiftable<T>,
	) { }

	public i(index: 0): T {
		try {
			if (this.cmp(this.s1.i(0), this.s2.i(0)) <= 0)
				return this.s1.i(0);
			else
				return this.s2.i(0);
		} catch (err) {
			try {
				return this.s1.i(0);
			} catch (err) {
				return this.s2.i(0);
			}
		}
	}

	public shift(): T {
		try {
			if (this.cmp(this.s1.i(0), this.s2.i(0)) <= 0)
				return this.s1.shift();
			else
				return this.s2.shift();
		} catch (err) {
			try {
				return this.s1.shift();
			} catch (err) {
				return this.s2.shift();
			}
		}
	}

	public *[Symbol.iterator]() {
		try {
			for (; ;) yield this.shift();
		} catch (err) { }
	}
}
