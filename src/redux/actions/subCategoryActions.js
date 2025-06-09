import {useGetData} from "../../hooks/useGetData"
import { useInsertData } from "../../hooks/useInsertData"
import { CREATE_SUB_CATEGORY, GET_ERROR, GET_SPECIFIED_SUB_CATEGORY,} from "../types"


export const createSubCategory = (data) => async (dispatch) => {
    try {
        const response = await useInsertData(`/api/v1/subcategories`, data)
        dispatch({
            type: CREATE_SUB_CATEGORY,
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
export const getSpecifiedSubCategory = (id) => async (dispatch) => {
    try {
        const response = await useGetData(`/api/v1/categories/${id}/subcategories`)
        dispatch({
            type: GET_SPECIFIED_SUB_CATEGORY,
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