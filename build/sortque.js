"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoEnoughElem = exports.Sortque = void 0;
const deque_1 = require("deque");
Object.defineProperty(exports, "NoEnoughElem", { enumerable: true, get: function () { return deque_1.NoEnoughElem; } });
const sorted_queue_1 = require("sorted-queue");
const assert = require("assert");
class Sortque {
    constructor(cmp) {
        this.length = 0;
        this.sQ = new sorted_queue_1.SortedQueue(cmp);
    }
    push(item) {
        this.length += 1;
        const sQPointer = this.sQ.push(item);
        return new Sortque.Pointer(sQPointer);
    }
    getLength() {
        return this.length;
    }
    getFront() {
        assert(this.length > 0, new deque_1.NoEnoughElem());
        return this.sQ.peek().value;
    }
    shift() {
        const item = this.getFront();
        this.sQ.pop();
        return item;
    }
}
exports.Sortque = Sortque;
(function (Sortque) {
    class Pointer {
        constructor(p) {
            this.p = p;
            this.removed = false;
        }
        deref() {
            return this.deref();
        }
        remove() {
            assert(!this.removed);
            this.p.pop();
            this.removed = true;
        }
    }
    Sortque.Pointer = Pointer;
})(Sortque = exports.Sortque || (exports.Sortque = {}));
//# sourceMappingURL=sortque.js.map