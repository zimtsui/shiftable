"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShiftableFromIterator = void 0;
const assert = require("assert");
class ShiftableFromIterator {
    constructor(it, r) {
        this.it = it;
        this.r = r;
    }
    i(index) {
        assert(!this.r.done, new RangeError());
        return this.r.value;
    }
    shift() {
        const x = this.i(0);
        this.r = this.it.next();
        return x;
    }
}
exports.ShiftableFromIterator = ShiftableFromIterator;
//# sourceMappingURL=shiftable-from-iterator.js.map