import { CREATE_CATEGORY,  GET_ALL_CATEGORY, GET_ERROR, GET_ONE_CATEGORY } from "../types"

const initialState = { category: [], allCategory: [],oneCategory:[], loading: true }
export const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_CATEGORY:
            return {
                ...state, allCategory: action.payload, loading: false
            }
        case CREATE_CATEGORY:
            return {
                category: action.payload, loading: false
            }
       
        case GET_ONE_CATEGORY:
            return {
                oneCategory: action.payload, loading: false
            }
       
        case GET_ERROR:
            return {
                category: action.payload, loading: true
            }
        default:
            return state

    }
}