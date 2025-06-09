import { useGetDataToken } from "../../hooks/useGetData"
import { useInsertData } from "../../hooks/useInsertData"
import  useDeleteData  from "../../hooks/useDeleteData"
import  {useUpdateData}  from "../../hooks/useUpdateData"
import { ALL_REVIEW_PRODUCT, CREATE_REVIEW, DELETE_REVIEW_PRODUCT, UPDATE_REVIEW_PRODUCT } from "../types"


export const createReview = (prodId,body) => async (dispatch) => {
    
    try {
        const response = await useInsertData(`/api/v1/products/${prodId}/reviews`,body)
        dispatch({
            type: CREATE_REVIEW,
            payload: response,
            loading: true
        })
    }  catch (e) {
            dispatch({
                type: CREATE_REVIEW,
                payload: e.response
            })
    
        }
}
export const allReviewProduct = (prodId,limit,page) => async (dispatch) => {
    try {
        const response = await useGetDataToken(`/api/v1/products/${prodId}/reviews?page=${page}&limit=${limit}`)
        dispatch({
            type: ALL_REVIEW_PRODUCT,
            payload: response,
            loading: true
        })
    }  catch (e) {
            dispatch({
                type: ALL_REVIEW_PRODUCT,
                payload: e.response
            })
    
        }
}
export const deleteReviewOnProduct = (id) => async (dispatch) => {
    try {
        const response = await useDeleteData(`/api/v1/reviews/${id}`)
        dispatch({
            type: DELETE_REVIEW_PRODUCT,
            payload: response,
            loading: true
        })
    }  catch (e) {
            dispatch({
                type: DELETE_REVIEW_PRODUCT,
                payload: e.response
            })
    
        }
}
export const editReviewOnProduct = (id,body) => async (dispatch) => {
    try {
        const response = await useUpdateData(`/api/v1/reviews/${id}`,body)
        dispatch({
            type: UPDATE_REVIEW_PRODUCT,
            payload: response,
            loading: true
        })
    }  catch (e) {
            dispatch({
                type: UPDATE_REVIEW_PRODUCT,
                payload: e.response
            })
    
        }
}
