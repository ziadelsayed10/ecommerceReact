import {useGetData} from "../../hooks/useGetData"
import { useInsertDataWithImage } from "../../hooks/useInsertData"
import { useUpdateDataWithImage } from "../../hooks/useUpdateData"
import  useDeleteData  from "../../hooks/useDeleteData"
import { CREATE_PRODUCT, DELETE_PRODUCT, GET_ALL_PRODUCT, GET_ERROR, GET_ONE_PRODUCT, GET_PRODUCT_LIKE, UPDATE_PRODUCT } from "../types"


export const createProduct = (formData) => async (dispatch) => {
    try {
        const response = await useInsertDataWithImage(`/api/v1/products`,formData)
        dispatch({
            type: CREATE_PRODUCT,
            payload: response,
            loading: true
        })
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "ERROR" + e
        })

    }
}
export const getAllProduct = (limit) => async (dispatch) => {
    try {
        const response = await useGetData(`/api/v1/products?limit=${limit}`)
        dispatch({
            type: GET_ALL_PRODUCT,
            payload: response,
            loading: true
        })
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "ERROR" + e
        })

    }
}
export const getAllProductPage = (limit,page) => async (dispatch) => {
    try {
        const response = await useGetData(`/api/v1/products?limit=${limit}&page=${page}`)
        dispatch({
            type: GET_ALL_PRODUCT,
            payload: response,
            loading: true
        })
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "ERROR" + e
        })

    }
}

export const getAllProductSearch = (quereyString) => async (dispatch) => {
    try {
        const response = await useGetData(`/api/v1/products?${quereyString}`);
        // console.log(response)
        dispatch({
            type: GET_ALL_PRODUCT,
            payload: response,
            loading: true
        })
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "ERROR" + e
        })

    }
}

export const getOneProduct = (id) => async (dispatch) => {
    try {
        const response = await useGetData(`/api/v1/products/${id}`)
        dispatch({
            type: GET_ONE_PRODUCT,
            payload: response,
            loading: true
        })
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "ERROR" + e
        })

    }
}
export const getProductLike = (id) => async (dispatch) => {
    try {
        const response = await useGetData(`/api/v1/products/?category=${id}`)
        dispatch({
            type: GET_PRODUCT_LIKE,
            payload: response,
            loading: true
        })
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "ERROR" + e
        })

    }
}
export const deleteProduct = (id) => async (dispatch) => {
    try {
        const response = await useDeleteData(`/api/v1/products/${id}`)
        console.log(response)
        dispatch({
            type: DELETE_PRODUCT,
            payload: response,
            loading: true
        })
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "ERROR" + e
        })

    }
}
export const updateProduct = (id,formData) => async (dispatch) => {
    try {
        const response = await useUpdateDataWithImage(`/api/v1/products/${id}`,formData)
        console.log(response)
        dispatch({
            type: UPDATE_PRODUCT,
            payload: response,
            loading: true
        })
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "ERROR" + e
        })

    }
}