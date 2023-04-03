// import {roles} from "./models/roles";
import { getToken, refreshToken } from "./auth/services/auth";
import { getMembers } from "./auth/services/member";
import { getPermissions } from "./auth/services/permission";
import { getPolicies, updatePolicies } from "./auth/services/policy";
import { getRole } from "./auth/services/role";

const returnValue = (val)=>{
    return "** "+val+" **"
}
module.exports ={returnValue, getMembers, getPermissions,getToken, refreshToken, getPolicies, getRole, updatePolicies}