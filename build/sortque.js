"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sortque = void 0;
const binary_heap_1 = require("binary-heap");
const merge_1 = require("./merge");
const seq_1 = require("./seq");
class Sortque {
    constructor(cmp, sortedSeq = []) {
        this.cmp = cmp;
        this.heap = new binary_heap_1.Heap(cmp);
        this.sortedIt = sortedSeq[Symbol.iterator]();
        this.r = this.sortedIt.next();
    }
    [Symbol.iterator]() {
        return this;
    }
    next() {
        try {
            return {
                done: false,
                value: this.shift(),
            };
        }
        catch (err) {
            return {
                done: true,
                value: void null,
            };
        }
    }
    push(x) {
        return this.heap.push(x);
    }
    pushSorted(sortedSeq) {
        if (!this.r.done) {
            this.heap.push(this.r.value);
            this.sortedIt = (0, merge_1.sortMerge2)(this.cmp)(new seq_1.Seq(this.sortedIt), sortedSeq)[Symbol.iterator]();
        }
        else
            this.sortedIt = sortedSeq[Symbol.iterator]();
        this.shiftUndoneSorted();
    }
    /**
     * @throws RangeError
     */
    getFront() {
        if (this.r.done)
            return this.heap.getFront();
        if (this.heap.getSize() === 0)
            return this.r.value;
        return this.cmp(this.heap.getFront(), this.r.value) <= 0
            ? this.heap.getFront()
            : this.r.value;
    }
    shiftUndoneSorted() {
        const x = this.r.value;
        this.r = this.sortedIt.next();
        return x;
    }
    /**
     * @throws RangeError
     */
    shift() {
        if (this.r.done)
            return this.heap.shift();
        if (this.heap.getSize() === 0)
            return this.shiftUndoneSorted();
        if (this.cmp(this.heap.getFront(), this.r.value) <= 0)
            return this.heap.shift();
        else
            return this.shiftUndoneSorted();
    }
    /**
     * @returns 0 or Number.POSITIVE_INFINITY.
     */
    getSize() {
        if (this.r.done && this.heap.getSize() === 0)
            return 0;
        return Number.POSITIVE_INFINITY;
    }
}
exports.Sortque = Sortque;
//# sourceMappingURL=sortque.js.map