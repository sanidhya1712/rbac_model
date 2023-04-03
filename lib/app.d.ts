import { getToken, refreshToken } from "./services/auth";
import { getMembers } from "./services/member";
import { getPermissions } from "./services/permission";
import { getPolicies, updatePolicies } from "./services/policy";
import { getRole } from "./services/role";
declare const returnValue: (val: any) => string;
export { returnValue, getMembers, getPermissions, getToken, refreshToken, getPolicies, getRole, updatePolicies };
