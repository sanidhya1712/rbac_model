import axios from 'axios';

// import { API_URL, MARKETING_API_URL } from './apiUrl';

// import { negativeResponse } from "../utils/ResponseHandler";

// import { fibotalkMonitoring } from '../utils/fibotalk';





const _authorizationHeaders = () => ({

    // Authorization: isAuthenticated() ? document.cookie.slice(12, -1) : "",

//     "accessToken": localStorage.getItem('loggedInUser') ? JSON.parse(localStorage.getItem('loggedInUser')).accessToken.jwtToken : '',

//     "idToken": localStorage.getItem('loggedInUser') ? JSON.parse(localStorage.getItem('loggedInUser')).idToken.jwtToken : '',

//     "jwtXaccessToken": localStorage.getItem('loggedInUser') ? JSON.parse(localStorage.getItem('loggedInUser')).jwtXaccessToken : '',

    "Content-Type": "application/json",

       




});




const _authorizationHeadersOut = () => ({

    "key": "key"

});




const handleError = err => {

    console.error(`Api call error in services -> request.js : `, err);

//     if (err && err.response && err.response.status) {

//         // logout if unauthorized

//         if (err.response.status === 401 || err.response.status === 403) {

//             //

//             let newEmail = localStorage.getItem("loginUser");

//             let rememberMe = localStorage.getItem("rememberMe");




//             localStorage.clear();




// //             localStorage.setItem("loginUser", newEmail);

// //             localStorage.setItem("rememberMe", rememberMe);




//             window.location.replace('/loginComponent')

//             // negativeResponse(err.response, err.response.status)

//             // LocalStorage.destroy.userData();

//             // document.cookie = [`${cookieName}=` + null + "; expires=Thu, 18 Dec 1995 12:00:00 UTC"]

//             // !window.location.pathname === '/login' && window.location.reload(true)

//         }

//         else if (err.response.status === 400 || err.response.status === 500) {

//             // alert('No platform access');

//             return err.response;




//         }

//     }

};




// export const getRequest = async (url, headers = _authorizationHeaders(), byPassKey) => {

//     try {

//        

//         const res = await axios.get(API_URL + url, {

//             headers: Object.assign({}, byPassKey? byPassKey: headers)

//         });

//        

//         return res.data.result ? res.data.result : res;

//     } catch (err) {

//         handleError(err);

//     }

// };

export const getRequest = async (url, token, headers = _authorizationHeaders()): Promise<{ data:string }> => {

    try {

        const res = await axios.get("http://localhost:8000" + url, {

            headers: Object.assign({}, headers),

            timeout: 120 * 1000,

        });

        return res.data.result ? res.data.result : res;




    } catch (err) {
        handleError(err);

    }

};

export const postRequest = async (url, token, data = {},  headers = _authorizationHeaders()) => {

    try {

        const res = await axios({

            url: "http://localhost:8000 + url",

            method: "POST",

            headers: Object.assign({}, headers),

            timeout: 120 * 1000,

            data

        });

        return res.data.result ? res.data.result : res;

    } catch (err) {

        handleError(err);

        if(err.response){

            return err.response.data;

        }

    }

};




export const putRequest = async (url, token, data = {}, headers = _authorizationHeaders()) => {

    try {

        const res = await axios({

            url: "http://localhost:8000 + url",

            method: "PUT",

            headers: Object.assign({}, headers),

            timeout: 120 * 1000,

            data

        });

        return res.data.result ? res.data.result : res;

    } catch (err) {

        handleError(err);

        return err.response.data

    }

};

// export const patchRequest = async (url, data = {}, headers = _authorizationHeaders()) => {

//     try {

//         const res = await axios({

//             url: "http://localhost:8000 + url",

//             method: "PATCH",

//             headers: Object.assign({}, headers),

//             timeout: 120 * 1000,

//             body: JSON.stringify(data)

//         });

//         return res.data.result ? res.data.result : res;

//     } catch (err) {

//         handleError(err);

//     }

// };




export const deleteRequest = async (url, token, headers = _authorizationHeaders()) => {

    try {
        const res = await axios({

            url: "http://localhost:8000 + url",

            method: "DELETE",

            timeout: 120 * 1000,

            headers: Object.assign({}, headers)

        });

        return res.data.result ? res.data.result : res;

    } catch (err) {

        handleError(err);

        return err.response;




    }

};




export const api = {

    deleteRequest,

    getRequest,

    postRequest,

    putRequest,

//     patchRequest,
};