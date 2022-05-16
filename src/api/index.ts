import axios from 'axios';
import * as _ from 'lodash';

export const API_URL = process.env.REACT_APP_API_URL;
console.log('API_URL:', API_URL);

const userAuth:any = {
    "user": "test",
    "password":"test@123"
};

(() => {
    console.log("-- before axios intercept")
    axios.interceptors.response.use(
        (resp) => {
            console.log("-- in axios");
          return resp.data || resp
        },
        (err) => {
          return Promise.reject(err.response ? err.response.data || err.response : err)
        },
    )

})()


/**
 * @name getUserList
 * @description 
 * Get Users
 */
export function getUserList(payload: any) {

    let payLoadData = {
        ...payload,
        ...userAuth
    };

    return axios.post( `${API_URL}/services/api/fetch_user.php`, JSON.stringify(payLoadData));
}

/**
 * @name setUserContactMessage
 * @description
 * Send User contact a message
 */
export function sendUserContactMessage(payload: any) {
    let payLoadData = {
        ...payload,
        ...userAuth
    }
    return axios.post(`${API_URL}/services/api/sendSmsApi.php`, JSON.stringify(payLoadData));
}

/**
 * @name addNewUser
 * @description
 * Add New User details
 */
export function addNewUser(payload: any) {
    let payLoadData = {
        ...payload,
        ...userAuth
    };
    return axios.post(`${API_URL}/services/api/adduser.php`, JSON.stringify(payLoadData));
}

export function getContacts(payload: any) {
    let payLoadData = {
        ...payload,
        ...userAuth
    };
    return axios.post(`${API_URL}/services/api/fetch_contacts.php`, JSON.stringify(payLoadData));
}