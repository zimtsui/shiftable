"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shifterator = void 0;
const assert = require("assert");
class Shifterator {
    constructor(it, r) {
        this.it = it;
        this.r = r;
    }
    static fromIterable(iterable) {
        const it = iterable[Symbol.iterator]();
        return new Shifterator(it, it.next());
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
exports.Shifterator = Shifterator;
//# sourceMappingURL=shifterator.js.map