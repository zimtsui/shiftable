export interface Shiftable<T> {
	i(index: 0): T;
	shift(): T;
}
