import { Cmp } from '@zimtsui/binary-heap';
import { Shiftable } from './shiftable';


export class Affiliation<T> implements Shiftable<T>, Iterable<T>{
	public constructor(
		private cmp: Cmp<T>,
		private master: Shiftable<T>,
		private slave: Shiftable<T>,
	) { }

	public i(index: 0): T {
		try {
			if (this.cmp(this.master.i(0), this.slave.i(0)) <= 0)
				return this.master.i(0);
			else
				return this.slave.i(0);
		} catch (err) {
			return this.master.i(0);
		}
	}

	public shift(): T {
		try {
			if (this.cmp(this.master.i(0), this.slave.i(0)) <= 0)
				return this.master.shift();
			else
				return this.slave.shift();
		} catch (err) {
			return this.master.shift();
		}
	}

	public *[Symbol.iterator]() {
		try {
			for (; ;) yield this.shift();
		} catch (err) { }
	}
}
