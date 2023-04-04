export declare const getRequest: (url: any, token: any, headers?: {
    "Content-Type": string;
}) => Promise<any>;
export declare const postRequest: (url: any, token: any, data?: {}, headers?: {
    "Content-Type": string;
}) => Promise<any>;
export declare const putRequest: (url: any, token: any, data?: {}, headers?: {
    "Content-Type": string;
}) => Promise<any>;
export declare const deleteRequest: (url: any, token: any, headers?: {
    "Content-Type": string;
}) => Promise<any>;
export declare const api: {
    deleteRequest: (url: any, token: any, headers?: {
        "Content-Type": string;
    }) => Promise<any>;
    getRequest: (url: any, token: any, headers?: {
        "Content-Type": string;
    }) => Promise<any>;
    postRequest: (url: any, token: any, data?: {}, headers?: {
        "Content-Type": string;
    }) => Promise<any>;
    putRequest: (url: any, token: any, data?: {}, headers?: {
        "Content-Type": string;
    }) => Promise<any>;
};
