import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT_SUCCESS, LOGOUT_REQUEST, LOGOUT_ERROR } from "../actions/UserActions";

const initialState = {
    accessToken: null,
    isLoggedIn: false,
    message: ""
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return Object.assign({}, state, {
                ...state
            });
        case LOGIN_SUCCESS:
            return Object.assign({}, state, console.log(action), {
                ...state,
                accessToken: action.payload.accessToken,
                isLoggedIn: true,
            });
        case LOGIN_ERROR:
            return Object.assign({}, state, {
                ...state,
                message: action.payload.message,
                accessToken: ""
            })
        case LOGOUT_REQUEST:
            return Object.assign({}, state, {
                ...state,
                accessToken: null
            })
        case LOGOUT_SUCCESS:
            return Object.assign({}, state, {
                ...state,
                currentUser: [],
                isLoggedIn: false,
                message: action.payload.message,
                accessToken: null
            })
        case LOGOUT_ERROR:
            return Object.assign({}, state, {
                ...state,
                isLoggedIn: true,
                message: action.payload.message,
                accessToken: null
            })
        default:
            return state

    }
}

export default authReducer
