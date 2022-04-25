export interface ElementPointer<T> {
	getValue(): T;
}

export interface Removable<T> extends ElementPointer<T> {
	remove(): void;
}
