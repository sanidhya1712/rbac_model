"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roles = void 0;
class roles {
    constructor(role) {
        this.printRole = () => {
            console.log("role--", this.role);
            return this.role;
        };
        this.role = role;
    }
}
exports.roles = roles;
