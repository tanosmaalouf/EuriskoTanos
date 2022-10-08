// Api Config
import axios from 'axios';
import { urlApi } from './constant';
import { PrivateApiCall } from './interceptors'



/***************** Error Catcher **********/
const errorCatch = (error) => {
  if (error.response) {
    if (error.reponse?.data) {
      return error.response?.data
    }
    return error.response
  }
  return error
}



/************* AUTH ******************/

async function signIn(data) {
  return await axios.post(`${urlApi}/auth/signin`, data)
    .then((response) => response)
    .catch((error) => errorCatch(error))
}


//*************** Gets Articles ********/

async function getArticles(page) {
  return await PrivateApiCall.get(`/articles?page=${page}`)
    .then((response) => response)
    .catch((error) => errorCatch(error))
}



export {
  signIn,
  getArticles
}