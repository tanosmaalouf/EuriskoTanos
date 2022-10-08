import { combineReducers } from "redux";
import  authReducer  from './UserReducer';
import articlesReducer from './articlesReducer'

const rootReducers = combineReducers({
    articlesReducer,
    authReducer
})

export default rootReducers;