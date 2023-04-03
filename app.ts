// import {roles} from "./models/roles";
import { getToken, refreshToken } from "./src/services/auth";
import { getMembers } from "./src/services/member";
import { getPermissions } from "./src/services/permission";
import { getPolicies, updatePolicies } from "./auth/services/policy";
import { getRole } from "./src/services/role";

const returnValue = (val)=>{
    return "** "+val+" **"
}
module.exports ={returnValue, getMembers, getPermissions,getToken, refreshToken, getPolicies, getRole, updatePolicies}