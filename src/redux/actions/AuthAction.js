import { useInsertData } from "../../hooks/useInsertData"
import { CREATE_NEW_USER, FORGET_PASSWORD, LOGIN_USER } from "../types"




export const createNewUser = (Data) => async (dispatch) => {
    try {
        const response = await useInsertData(`/api/v1/auth/signup`,Data)
        dispatch({
            type: CREATE_NEW_USER,
            payload: response,
           
        })
    } catch (e) {
        dispatch({
            type: CREATE_NEW_USER,
            payload: e.response
        })

    }
}
export const loginUser = (Data) => async (dispatch) => {
    try {
        const response = await useInsertData(`/api/v1/auth/login`,Data)
        dispatch({
            type: LOGIN_USER,
            payload: response,
           
        })
    } catch (e) {
        dispatch({
            type: LOGIN_USER,
            payload: e.response
        })

    }
}
export const forgetPassword = (Data) => async (dispatch) => {
    try {
        const response = await useInsertData(`/api/v1/auth/forgotPasswords`,Data)
        dispatch({
            type: FORGET_PASSWORD,
            payload: response,
           
        })
    } catch (e) {
        dispatch({
            type: FORGET_PASSWORD,
            payload: e.response
        })

    }
}