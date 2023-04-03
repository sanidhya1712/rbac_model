export declare const getRequest: (url: any, headers?: {
    "Content-Type": string;
}) => Promise<any>;
export declare const postRequest: (url: any, data?: {}, headers?: {
    "Content-Type": string;
}) => Promise<any>;
export declare const putRequest: (url: any, data?: {}, headers?: {
    "Content-Type": string;
}) => Promise<any>;
export declare const deleteRequest: (url: any, headers?: {
    "Content-Type": string;
}) => Promise<any>;
export declare const api: {
    deleteRequest: (url: any, headers?: {
        "Content-Type": string;
    }) => Promise<any>;
    getRequest: (url: any, headers?: {
        "Content-Type": string;
    }) => Promise<any>;
    postRequest: (url: any, data?: {}, headers?: {
        "Content-Type": string;
    }) => Promise<any>;
    putRequest: (url: any, data?: {}, headers?: {
        "Content-Type": string;
    }) => Promise<any>;
};
