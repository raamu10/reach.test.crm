import axios from 'axios';
import * as _ from 'lodash';

export const API_URL = process.env.REACT_APP_API_URL;
console.log('API_URL:', API_URL);

const userAuth:any = {
    "user": "test",
    "password":"test@123"
};

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

    /* var credentials = btoa('test' + ':' + 'test@123');
    var basicAuth = 'Basic ' + credentials; */
    return axios.post( `${API_URL}/services/api/fetch_user.php`,
        payLoadData,
    {
        headers: {
            //Authorization: basicAuth
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin' : '*',
        },
        /* auth: {
            username: 'test',
            password: 'test@123'
        } */
    })
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
    return axios.post(`${API_URL}/services/api/sendSmsApi.php`, payLoadData)
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
    return axios.post(`${API_URL}/services/api/adduser.php`, payLoadData)
}

export function getContacts(payload: any) {
    let payLoadData = {
        ...payload,
        ...userAuth
    };
    return axios.post(`${API_URL}services/api/fetch_contacts.php`, payLoadData);
}