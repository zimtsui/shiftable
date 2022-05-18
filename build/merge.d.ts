import { Cmp } from 'binary-heap';
export declare const sortMerge2: <T>(cmp: Cmp<T>) => (it1: Iterator<T, any, undefined>, it2: Iterator<T, any, undefined>) => Generator<T, void, unknown>;
export declare const sortMerge: <T>(cmp: Cmp<T>) => (...iterators: Iterator<T, any, undefined>[]) => Iterator<T, any, undefined>;
