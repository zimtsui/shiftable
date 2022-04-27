"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sortque = void 0;
const sorted_queue_1 = require("sorted-queue");
const pointer_1 = require("./pointer");
const priority_queue_like_1 = require("./priority-queue-like");
const assert = require("assert");
class Sortque {
    constructor(sortedInitials, cmp) {
        this.sortedInitials = sortedInitials;
        this.initialPoint = null;
        this.sQ = new sorted_queue_1.SortedQueue(cmp);
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
        const sQPointer = this.sQ.push(x);
        return new pointer_1.Pointer(sQPointer);
    }
    getFront() {
        if (this.initialPoint === null ||
            this.initialPoint.isRemoved()) {
            const r = this.sortedInitials.next();
            if (!r.done)
                this.initialPoint = this.push(r.value);
        }
        const item = this.sQ.peek();
        assert(typeof item !== 'undefined', new priority_queue_like_1.NoEnoughElem());
        return item.value;
    }
    shift() {
        const item = this.getFront();
        this.sQ.pop();
        return item;
    }
}
exports.Sortque = Sortque;
//# sourceMappingURL=sortque.js.map