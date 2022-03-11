/* eslint-disable prettier/prettier */
import axios from 'axios'

//* Helper functions
export const BASE_URL = process.env.REACT_APP_API_URL
const getToken = () => { return { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } } }
const GET = (url, header = getToken()) => axios.get(url, header)
const DELETE = (url, header = getToken()) => axios.delete(url, header)
const POST = (url, body = {}, header = getToken()) => axios.post(url, body, header)
const PATCH = (url, body = {}, header = getToken()) => axios.patch(url, body, header)

//* GET
export const getItems = () => GET(`${BASE_URL}items/all`)
export const getItemById = (id) => GET(`${BASE_URL}items/${id}`)
export const getCart = () => GET(`${BASE_URL}cart/view`)

//* POST
export const postLogin = (body) => POST(`${BASE_URL}auth/login`, body, {})
export const postRegister = (body) => POST(`${BASE_URL}auth/register`, body, {})
export const postCartAdd = (body) => POST(`${BASE_URL}cart/add`, body)
export const postCartSetCount = (body) => PATCH(`${BASE_URL}cart/set-count`, body)
export const postCartSubmit = () => POST(`${BASE_URL}cart/submit`)

//* DELETE
export const deleteCartAll = () => DELETE(`${BASE_URL}cart/all`)
export const deleteCartItem = (id) => DELETE(`${BASE_URL}cart/${id}`)
