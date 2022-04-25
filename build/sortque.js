"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZeroElemShifted = exports.NoEnoughElem = exports.SortQue = void 0;
const queue_like_1 = require("deque/build/queue-like");
Object.defineProperty(exports, "NoEnoughElem", { enumerable: true, get: function () { return queue_like_1.NoEnoughElem; } });
Object.defineProperty(exports, "ZeroElemShifted", { enumerable: true, get: function () { return queue_like_1.ZeroElemShifted; } });
const sorted_queue_1 = require("sorted-queue");
const assert = require("assert");
class SortQue {
    constructor() {
        this.q = new sorted_queue_1.SortedQueue();
        this.length = 0;
    }
    push(...items) {
        for (const item of items)
            this.q.push(item);
        this.length += items.length;
    }
    getLength() {
        return this.length;
    }
    getFront() {
        assert(this.length >= 1, new queue_like_1.NoEnoughElem());
        return this.q.peek().value;
    }
    shift(count = 1) {
        assert(count >= 1, new queue_like_1.ZeroElemShifted());
        const item = this.getFront();
        this.q.pop();
        return item;
    }
}
exports.SortQue = SortQue;
//# sourceMappingURL=sortque.js.map