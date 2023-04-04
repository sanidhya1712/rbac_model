import { filters } from "../types/permission";
import { getRequest } from "../utilities/request";
export const getMembers = async(token: string, filters: filters = null)=>{
    await getRequest('/api')
}