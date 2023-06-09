"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roles = exports.updatePolicies = exports.getRole = exports.getPolicies = exports.refreshToken = exports.getToken = exports.getPermissions = exports.getMembers = exports.returnValue = void 0;
const roles_1 = require("./models/roles");
Object.defineProperty(exports, "roles", { enumerable: true, get: function () { return roles_1.roles; } });
const auth_1 = require("./services/auth");
Object.defineProperty(exports, "getToken", { enumerable: true, get: function () { return auth_1.getToken; } });
Object.defineProperty(exports, "refreshToken", { enumerable: true, get: function () { return auth_1.refreshToken; } });
const member_1 = require("./services/member");
Object.defineProperty(exports, "getMembers", { enumerable: true, get: function () { return member_1.getMembers; } });
const permission_1 = require("./services/permission");
Object.defineProperty(exports, "getPermissions", { enumerable: true, get: function () { return permission_1.getPermissions; } });
const policy_1 = require("./services/policy");
Object.defineProperty(exports, "getPolicies", { enumerable: true, get: function () { return policy_1.getPolicies; } });
Object.defineProperty(exports, "updatePolicies", { enumerable: true, get: function () { return policy_1.updatePolicies; } });
const role_1 = require("./services/role");
Object.defineProperty(exports, "getRole", { enumerable: true, get: function () { return role_1.getRole; } });
const returnValue = (val) => {
    return "** " + val + " **";
};
exports.returnValue = returnValue;
