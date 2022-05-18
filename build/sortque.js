"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sortque = void 0;
const binary_heap_1 = require("binary-heap");
const merge_1 = require("./merge");
class Sortque {
    constructor(cmp, sorted = (function* () { })()) {
        this.cmp = cmp;
        this.sorted = sorted;
        this.heap = new binary_heap_1.Heap(cmp);
        this.r = this.sorted.next();
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
    pushSorted(sorted) {
        if (!this.r.done) {
            this.heap.push(this.r.value);
            this.sorted = (0, merge_1.sortMerge2)(this.cmp)(this.sorted, sorted);
        }
        else
            this.sorted = sorted;
        this.shiftUndoneSorted();
    }
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
        this.r = this.sorted.next();
        return x;
    }
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
    getSize() {
        if (this.r.done && this.heap.getSize() === 0)
            return 0;
        return Number.POSITIVE_INFINITY;
    }
}
exports.Sortque = Sortque;
//# sourceMappingURL=sortque.js.map