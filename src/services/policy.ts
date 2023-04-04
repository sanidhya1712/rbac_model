import { filters } from "../types/permission";
import { getRequest, putRequest } from "../utilities/request";
export const getPolicies = async(token: string, filters: filters = null) => {
    await getRequest('/api')
}

export const updatePolicies = async(token: string, filters: filters = null) =>{
    await putRequest('/api')
}