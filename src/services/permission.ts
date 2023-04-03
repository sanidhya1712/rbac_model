import { getRole } from "./role"
import { filters } from "../types/permission";
export const getPermissions = async(token: string, filters: filters = null)=>{
    // const organisation = await getOrganisation(token)
    // const role = await getRole()
    // const permission = await getPermissions()
    console.log("filters--", filters);
    
}