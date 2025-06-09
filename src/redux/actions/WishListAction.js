import { useInsertData } from "../../hooks/useInsertData"
import  useDeleteData  from "../../hooks/useDeleteData"
import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, USER_All_WISHLIST } from "../types"
import { useGetDataToken } from "../../hooks/useGetData"


export const addProductToWishList = (body) => async (dispatch) => {
    
    try {
        const response = await useInsertData(`/api/v1/wishlist`,body)
        dispatch({
            type: ADD_TO_WISHLIST,
            payload: response,
            loading: true
        })
    }  catch (e) {
            dispatch({
                type: ADD_TO_WISHLIST,
                payload: e.response
            })
    
        }
}
export const removeProductFromWishList = (prodID) => async (dispatch) => {
    
    try {
        const response = await useDeleteData(`/api/v1/wishlist/${prodID}`)
        dispatch({
            type: REMOVE_FROM_WISHLIST,
            payload: response,
            loading: true
        })
    }  catch (e) {
            dispatch({
                type: REMOVE_FROM_WISHLIST,
                payload: e.response
            })
    
        }
}


export const getProductWishList = () => async (dispatch) => {
    
    try {
        const response = await useGetDataToken(`/api/v1/wishlist`)
        dispatch({
            type: USER_All_WISHLIST,
            payload: response,
            loading: true
        })
    }  catch (e) {
            dispatch({
                type: USER_All_WISHLIST,
                payload: e.response
            })
    
        }
}