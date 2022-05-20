import { Cmp } from 'binary-heap';
export declare const sortMerge2: <T>(cmp: Cmp<T>) => (seq1: Iterable<T>, seq2: Iterable<T>) => Iterable<T>;
export declare const sortMerge: <T>(cmp: Cmp<T>) => (...seqs: Iterable<T>[]) => Iterable<T>;
