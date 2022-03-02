import axios from 'axios'

//* Helper functions
export const BASE_URL = process.env.REACT_APP_API_URL
function getToken() {
	return { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
}

//* POST
export const postLogin = (body) => axios.post(`${BASE_URL}auth/login`, body)
export const postRegister = (body) => axios.post(`${BASE_URL}auth/register`, body)

//* GET
export const getItems = () => axios.get(`${BASE_URL}items/all`, getToken())
