"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Seq = void 0;
class Seq {
    constructor(it) {
        this.it = it;
    }
    [Symbol.iterator]() {
        return this.it;
    }
}
exports.Seq = Seq;
//# sourceMappingURL=seq.js.map