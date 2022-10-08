import { ARTICLES_FETCHED_ERROR, ARTICLES_FETCHED_STARTED, ARTICLES_FETCHED_SUCCESS } from "../actions/articlesActions";

const defaultState = {
  data: [],
  isLoading: false,
  message: "",
  accessToken: null
}




export const articleReducer = (state = defaultState, action) => {
  // console.log(action.payload)
  switch (action.type) {
    case ARTICLES_FETCHED_STARTED:
      return Object.assign({}, state, {
        ...state,
        isLoading: true,
        accessToken: null
      })
    case ARTICLES_FETCHED_SUCCESS:
      console.log(action.payload)
      return Object.assign({}, state, {
        ...state,
        isLoading: false,
        data: action.payload.data,
        accessToken: action.payload.accessToken
      })
    case ARTICLES_FETCHED_ERROR:
      return Object.assign({}, state, {
        ...state,
        isLoading: false,
        data: [],
      })

    default:
      return state
  }
}

export default articleReducer
