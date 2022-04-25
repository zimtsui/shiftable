export interface ElementPointer<T> {
    deref(): T;
}
export interface Removable<T> extends ElementPointer<T> {
    remove(): void;
}
