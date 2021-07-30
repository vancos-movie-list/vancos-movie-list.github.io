import api from "../../services/api.js";
import { jsonRequest } from "./jsonRequest.js";


export async function login(email, password) {

    let body = {
        email,
        password
    }
    let response = await jsonRequest(api.login, 'Post', body);
    if (response) {
        saveData(response.accessToken, response._id, response.email);
        return response
    }


}
export async function register(email, password) {

    let body = {
        email,
        password
    }
    let response = await jsonRequest(api.register, 'Post', body);

    if (response) {
        saveData(response.accessToken, response._id, response.email);
        return response
    }
}

export async function logout() {
    let response = await jsonRequest(api.logout, undefined, undefined, true, true)
    localStorage.clear()
}

function getAllData() {
    return {
        token: localStorage.getItem('authToken'),
        userId: localStorage.getItem('userId'),
        email: localStorage.getItem('email')
    }

}

function isLoggedIn() {
    return localStorage.getItem('authToken') !== null
}

function saveData(token, userId, email) {
    localStorage.setItem('authToken', token);
    localStorage.setItem('userId', userId);
    localStorage.setItem('email', email);

}
function getAuthToken() {
    return localStorage.getItem('authToken')

}

export default {
    getAuthToken,
    saveData,
    getAllData,
    isLoggedIn
}
