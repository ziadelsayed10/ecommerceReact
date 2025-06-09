import { ALL_REVIEW_PRODUCT, CREATE_REVIEW, DELETE_REVIEW_PRODUCT, UPDATE_REVIEW_PRODUCT, } from "../types"


const initialState = {
    createReview: [],
    allReviewProduct: [],
    deleteReviewProduct: [],
    updateReviewProduct: [],
     loading: true
}

export const ReviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_REVIEW:
            return {
                ...state, createReview: action.payload, loading: false
            }
        case ALL_REVIEW_PRODUCT:
            return {
                ...state, allReviewProduct: action.payload, loading: false
            }
        case DELETE_REVIEW_PRODUCT:
            return {
                ...state,deleteReviewProduct: action.payload, loading: false
            }
        case UPDATE_REVIEW_PRODUCT:
            return {
                ...state,updateReviewProduct: action.payload, loading: false
            }
        
        default:
            return state

    }
}