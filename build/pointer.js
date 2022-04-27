"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pointer = void 0;
const assert = require("assert");
class Pointer {
    constructor(p) {
        this.p = p;
        this.removed = false;
    }
    isRemoved() {
        return this.removed;
    }
    deref() {
        return this.p.value;
    }
    remove() {
        assert(!this.removed);
        this.p.pop();
        this.removed = true;
    }
}
exports.Pointer = Pointer;
//# sourceMappingURL=pointer.js.map