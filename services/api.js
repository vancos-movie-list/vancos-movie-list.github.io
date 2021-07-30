export const baseUrl = 'http://localhost:3030';


const login = `${baseUrl}/users/login`
const logout = `${baseUrl}/users/logout`
const register = `${baseUrl}/users/register`
const movies = `${baseUrl}/data/movies`

export default {
    login,
    logout,
    register,
    movies
}