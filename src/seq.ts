export class Seq<T> implements Iterable<T>{
	public constructor(
		private it: Iterator<T>,
	) { }

	public [Symbol.iterator]() {
		return this.it;
	}
}
