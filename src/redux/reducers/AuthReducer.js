import { CREATE_NEW_USER, FORGET_PASSWORD, LOGIN_USER } from "../types"


const initialState = {
    createUser: [],
    loginUser: [],
    forgetPassword: [],
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
        default:
            return state

    }
}