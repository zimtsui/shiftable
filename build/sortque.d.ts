import { QueueLike, Defined, NoEnoughElem, ZeroElemShifted } from 'deque/build/queue-like';
export declare class Sortque<T extends Defined> implements QueueLike<T> {
    private q;
    private length;
    push(...items: T[]): void;
    getLength(): number;
    getFront(): T;
    shift(count?: number): T;
}
export { QueueLike, Defined, NoEnoughElem, ZeroElemShifted, };
