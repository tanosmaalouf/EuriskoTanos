import { signIn } from "../../config/config";

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT_USER = 'LOGOUT_USER';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_ERROR = 'LOGOUT_ERROR'


export function loginClient(data, history) {
    return async (dispatch) => {
        try {
            dispatch({
                type: LOGIN_REQUEST,
            })
            await signIn(data).then(response => {
                if (response?.status === 201) {
                    dispatch({
                        type: LOGIN_SUCCESS,
                        payload: {
                            accessToken: response.data.accessToken,
                            isLoggedIn: true
                        }
                    })
                    localStorage.setItem('euriskoToken', response?.data?.accessToken)
                    history.push("/dashboard")

                } else {
                    dispatch({
                        type: LOGIN_ERROR,
                        payload: {
                            accessToken: ""
                        }
                    })
                    alert(response?.data?.message)

                }
            })
        } catch (error) {
            let message = 'Error signing in, please try again or contact customer support.'
            dispatch({
                type: LOGIN_ERROR,
                payload: {
                    message
                },
            })
        }
    }
};

export function logoutClient(history) {
    return async (dispatch) => {
        let message;
        try {
            dispatch({
                type: LOGOUT_REQUEST,
            })

            if (localStorage.getItem('euriskoToken') && localStorage.removeItem('euriskoToken')) {
                dispatch({
                    type: LOGOUT_SUCCESS
                })
                history.push("/login")
                window.location.reload()
            } else {
                message = 'An Error Occured while logging you out, please try again later or contact customer support'
                dispatch({
                    type: LOGOUT_ERROR
                })

            }
        } catch (err) {
            message = 'An Error Occured while logging you out, please try again latetr or contact customer support'
            dispatch({
                type: LOGOUT_ERROR,
                payload: {
                    message
                },
            })
        }
    }
}