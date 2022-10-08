import { getArticles } from "../../config/config";

export const ARTICLES_FETCHED_STARTED = "ARTICLES_FETCHED_STARTED";
export const ARTICLES_FETCHED_SUCCESS = "ARTICLES_FETCHED_SUCCESS";
export const ARTICLES_FETCHED_ERROR = "ARTICLES_FETCHED_ERROR";

export const ARTICLES_SEARCH_STARTED = "ARTICLES_SEARCH_STARTED";
export const ARTICLES_SEARCH_SUCCESS = "ARTICLES_SEARCH_SUCCESS";
export const ARTICLES_SEARCH_ERROR = "ARTICLES_SEARCH_ERROR";


const articlesActions = {
  getAllArticles: (page) => async (dispatch) => {
    try {
      dispatch({
        type: ARTICLES_FETCHED_STARTED,
      })
      const response = await getArticles(page)
      if (response?.status === 200) {
        dispatch({
          type: ARTICLES_FETCHED_SUCCESS,
          payload: {
            data: response?.data?.response,
          }
        })
      } else {
        dispatch({
          type: ARTICLES_FETCHED_ERROR
        })
      }
    } catch (error) {
      dispatch({
        type: ARTICLES_FETCHED_ERROR
      })
    }
  }
}

export default articlesActions