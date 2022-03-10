/* eslint-disable prettier/prettier */
import axios from 'axios'

//* Helper functions
export const BASE_URL = process.env.REACT_APP_API_URL
function getToken() {
	return { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
}

//* GET
export const getItems = () => axios.get(`${BASE_URL}items/all`, getToken())
export const getItemById = (id) => axios.get(`${BASE_URL}items/${id}`, getToken())
export const getCart = () => axios.get(`${BASE_URL}cart/view`, getToken())

//* POST
export const postLogin = (body) => axios.post(`${BASE_URL}auth/login`, body)
export const postRegister = (body) => axios.post(`${BASE_URL}auth/register`, body)
export const postCartAdd = (body) => axios.post(`${BASE_URL}cart/add`, body)
export const postCartSetCount = (body) => axios.post(`${BASE_URL}cart/set-count`, body)
export const postCartSubmit = () => axios.post(`${BASE_URL}cart/submit`, {}, getToken())

//* DELETE
export const deleteCartAll = () => axios.delete(`${BASE_URL}cart/all`, getToken())
export const deleteCartItem = (id) => axios.delete(`${BASE_URL}cart/${id}`, getToken())
