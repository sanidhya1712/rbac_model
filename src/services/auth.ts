import { filters } from "../types/permission";
import { getRequest, postRequest } from "../utilities/request";
export const getToken = async(token: string, filter: filters = null)=>{
    await getRequest('/api', token)
}

export const refreshToken = async(token: string, filters: filters = null)=>{
    await postRequest('/api', token)
}