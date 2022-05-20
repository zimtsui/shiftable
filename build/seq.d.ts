export declare class Seq<T> implements Iterable<T> {
    private it;
    constructor(it: Iterator<T>);
    [Symbol.iterator](): Iterator<T, any, undefined>;
}
