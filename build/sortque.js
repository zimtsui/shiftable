"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sortque = exports.Pointer = exports.NoEnoughElem = exports.AlreadyRemoved = void 0;
const binary_heap_1 = require("binary-heap");
const merge_1 = require("./merge");
var binary_heap_2 = require("binary-heap");
Object.defineProperty(exports, "AlreadyRemoved", { enumerable: true, get: function () { return binary_heap_2.AlreadyRemoved; } });
Object.defineProperty(exports, "NoEnoughElem", { enumerable: true, get: function () { return binary_heap_2.NoEnoughElem; } });
Object.defineProperty(exports, "Pointer", { enumerable: true, get: function () { return binary_heap_2.Pointer; } });
class Sortque {
    constructor(cmp) {
        this.cmp = cmp;
        // null 表示 fill 记录以清空
        this.lastFilled = null;
        this.sorted = null;
        this.heap = new binary_heap_1.Heap(cmp);
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
        if (this.sorted === null) {
            this.sorted = sorted;
            return;
        }
        this.sorted = (0, merge_1.sortMerge)(this.cmp)(this.sorted, sorted);
        this.lastFilled = null;
    }
    tryFill() {
        if (this.sorted === null)
            return;
        if (this.lastFilled && !this.lastFilled.isRemoved())
            return;
        const r = this.sorted.next();
        if (!r.done)
            this.lastFilled = this.heap.push(r.value);
        else
            this.sorted = null;
    }
    getFront() {
        this.tryFill();
        return this.heap.getFront();
    }
    shift() {
        this.tryFill();
        return this.heap.shift();
    }
}
exports.Sortque = Sortque;
//# sourceMappingURL=sortque.js.map