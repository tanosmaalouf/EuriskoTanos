import axios from 'axios'

import { urlApi } from '../constant.js'


export const PrivateApiCall = axios.create({
  baseURL: urlApi,
})

PrivateApiCall.interceptors.request.use(
  (req) => {
    const token = localStorage.getItem('euriskoToken')
    if (token) {
      req.headers.Authorization = `Bearer ${token}`
    }
    return req
  },
  (err) => {
    throw err
  },
)

PrivateApiCall.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err?.reponse) {
      if (err?.response?.status === 401) {
        localStorage.clear()
        window.location.href = `${window.location.origin}/`
      }
    }
    throw err
  },
)


