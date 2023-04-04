import { filters } from "../types/permission";
export declare const getPolicies: (token: string, filters?: filters) => Promise<void>;
export declare const updatePolicies: (token: string, filters?: filters) => Promise<void>;
