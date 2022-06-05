"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Affiliation = void 0;
class Affiliation {
    constructor(cmp, master, slave) {
        this.cmp = cmp;
        this.master = master;
        this.slave = slave;
    }
    i(index) {
        try {
            if (this.cmp(this.master.i(0), this.slave.i(0)) <= 0)
                return this.master.i(0);
            else
                return this.slave.i(0);
        }
        catch (err) {
            return this.master.i(0);
        }
    }
    shift() {
        try {
            if (this.cmp(this.master.i(0), this.slave.i(0)) <= 0)
                return this.master.shift();
            else
                return this.slave.shift();
        }
        catch (err) {
            return this.master.shift();
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
exports.Affiliation = Affiliation;
//# sourceMappingURL=affiliation.js.map