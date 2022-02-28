import axios from 'axios'

// * Paths
export const BASE_URL = process.env.REACT_APP_API_URL

export const postLogin = (body) => axios.post(`${BASE_URL}auth/login`, body)
export const postRegister = (body) => axios.post(`${BASE_URL}auth/register`, body)
