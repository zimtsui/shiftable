export interface Shiftable<T> {
	i(index: 0): T;
	shift(): T;
}

// TODO why not extending Iterable ot Iterator
