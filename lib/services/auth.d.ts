import { filters } from "../types/permission";
export declare const getToken: (token: string, filter?: filters) => Promise<void>;
export declare const refreshToken: (token: string, filters?: filters) => Promise<void>;
