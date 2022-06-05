"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Merged = void 0;
class Merged {
    constructor(cmp, s1, s2) {
        this.cmp = cmp;
        this.s1 = s1;
        this.s2 = s2;
    }
    i(index) {
        try {
            if (this.cmp(this.s1.i(0), this.s2.i(0)) <= 0)
                return this.s1.i(0);
            else
                return this.s2.i(0);
        }
        catch (err) {
            try {
                return this.s1.i(0);
            }
            catch (err) {
                return this.s2.i(0);
            }
        }
    }
    shift() {
        try {
            if (this.cmp(this.s1.i(0), this.s2.i(0)) <= 0)
                return this.s1.shift();
            else
                return this.s2.shift();
        }
        catch (err) {
            try {
                return this.s1.shift();
            }
            catch (err) {
                return this.s2.shift();
            }
        }
    }
    *[Symbol.iterator]() {
        try {
            for (;;)
                yield this.shift();
        }
        catch (err) { }
    }
}
exports.Merged = Merged;
//# sourceMappingURL=merged.js.map