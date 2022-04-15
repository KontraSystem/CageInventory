/* eslint-disable prettier/prettier */
import axios from 'axios'

//* Helper functions
export const BASE_URL = process.env.REACT_APP_API_URL
const getToken = () => {
	return { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
}
const GET = (url, header = getToken()) => axios.get(url, header)
const DELETE = (url, header = getToken()) => axios.delete(url, header)
const POST = (url, body = {}, header = getToken()) => axios.post(url, body, header)
const PATCH = (url, body = {}, header = getToken()) => axios.patch(url, body, header)

//* GET
export const getItems = () => GET(`${BASE_URL}items/all`)
export const getItemById = (id) => GET(`${BASE_URL}items/${id}`)
export const getCart = () => GET(`${BASE_URL}cart/view`)
export const getUserCourses = () => GET(`${BASE_URL}courses/all`)
export const getCourseKits = (id) => GET(`${BASE_URL}courses/${id}/kits`)
export const getKitItems = (id) => GET(`${BASE_URL}items/by-course/${id}`)
export const getLogs = () => GET(`${BASE_URL}logs/all`)
export const getLogSeverity = (severity) => GET(`${BASE_URL}logs/severity/${severity}`)
export const getRequests = () => GET(`${BASE_URL}requests/all`)
export const getInventoryCheckout = () => GET(`${BASE_URL}requests/inventory-checkout`)
export const getRequestsByUser = (id) => GET(`${Base_URL}requests/user/${id}`)

//* POST
export const postLogin = (body) => POST(`${BASE_URL}auth/login`, body, {})
export const postRegister = (body) => POST(`${BASE_URL}auth/register`, body, {})
export const postCartAdd = (body) => POST(`${BASE_URL}cart/add`, body)
export const postCartSetCount = (body) => PATCH(`${BASE_URL}cart/set-count`, body)
export const postItemEdit = (id, body) => PATCH(`${BASE_URL}items/${id}`, body)
export const postAddItemModel = (body) => POST(`${BASE_URL}items/${id}/models/add`, body)
export const postCartSubmit = () => POST(`${BASE_URL}cart/submit`)
export const postNewKit = (id, body) => POST(`${BASE_URL}courses/${id}/kits`, body)
export const postAcceptRequest = (body) => POST(`${BASE_URL}requests/accept`, body)
export const postRejectRequest = (body) => POST(`${BASE_URL}requests/reject`, body)

//* DELETE
export const deleteCartAll = () => DELETE(`${BASE_URL}cart/all`)
export const deleteCartItem = (id) => DELETE(`${BASE_URL}cart/${id}`)


