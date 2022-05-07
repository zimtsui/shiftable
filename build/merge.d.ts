export declare const sortMerge: <T>(cmp: (x1: T, x2: T) => boolean) => (...iterators: Iterator<T, any, undefined>[]) => Iterator<T, any, undefined>;
