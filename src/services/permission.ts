import { getRole } from "./role"

export const getPermissions = async(token)=>{
    const organisation = await getOrganisation(token)
    const role = await getRole()
    const permission = await getPermissions()
}