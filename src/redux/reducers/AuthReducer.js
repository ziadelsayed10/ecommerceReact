import { CREATE_NEW_USER, FORGET_PASSWORD, LOGIN_USER, RESET_PASSWORD, VERIFY_PASSWORD } from "../types"


const initialState = {
    createUser: [],
    loginUser: [],
    forgetPassword: [],
    verifyPassword: [],
    resetPassword: [],
    loading: true
}

export const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_NEW_USER:
            return {
                ...state, createUser: action.payload, loading: false
            }
        case LOGIN_USER:
            return {
                ...state, loginUser: action.payload, loading: false
            }
        case LOGIN_USER:
            return {
                ...state, createUser: action.payload, loading: false
            }
        case FORGET_PASSWORD:
            return {
                ...state, forgetPassword: action.payload, loading: false
            }
        case VERIFY_PASSWORD:
            return {
                ...state, verifyPassword: action.payload, loading: false
            }
        case RESET_PASSWORD:
            return {
                ...state, resetPassword: action.payload, loading: false
            }
        default:
            return state

    }
}