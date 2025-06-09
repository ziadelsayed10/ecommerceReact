

import {  CREATE_SUB_CATEGORY, GET_ERROR, GET_SPECIFIED_SUB_CATEGORY } from "../types"

const initialState = { subCategory: [], loading: true }
export const subCategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_SUB_CATEGORY:
            return {
                subCategory: action.payload, loading: false
            }
        case GET_SPECIFIED_SUB_CATEGORY:
            return {
                getSpecifiedSubCat: action.payload, loading: false
            }
       
        case GET_ERROR:
            return {
                category: action.payload, loading: true
            }
        default:
            return state

    }
}