import api from "../../services/api.js";
import { jsonRequest } from "./jsonRequest.js";


export async function getAllMovies() {
    let response = await jsonRequest(api.movies);
    return response
}
export async function searchMovie(search) {
    let response = await jsonRequest(`${api.movies}?where=title%20LIKE%20%22${search}%22`);
    return response
}

export async function getMyMovies(ownerId) {
    let response = await jsonRequest(`${api.movies}?where=_ownerId%3D%22${ownerId}%22`);
    return response
}
export async function getMovie(id) {
    let response = await jsonRequest(`${api.movies}/${id}`);
    return response
}
export async function deleteMovie(id) {
    let response = await jsonRequest(`${api.movies}/${id}`, 'DELETE', undefined, true);
    return response
}

export async function createMovie(body) {
    let response = await jsonRequest(api.movies, 'Post', body, true);
    return response
}

export async function editMovie(id, body) {
    let response = await jsonRequest(`${api.movies}/${id}`, 'Put', body, true);
    return response
}
