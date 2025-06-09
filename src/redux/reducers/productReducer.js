import { CREATE_PRODUCT, DELETE_PRODUCT, GET_ALL_PRODUCT, GET_ERROR, GET_ONE_PRODUCT, GET_PRODUCT_LIKE, UPDATE_PRODUCT, } from "../types"


const initialState = {
    product: [],
    allProduct: [],
    oneProduct: [],
    productLike: [],
    deleteProduct: [],
    updateProduct: [],
    loading: true
}
export const productReducer = (state = initialState, action) => {
    switch (action.type) {

        case CREATE_PRODUCT:
            return {
                product: action.payload, loading: false
            }

        case GET_ALL_PRODUCT:
            return {
                ...state, allProduct: action.payload, loading: false
            }
        case GET_ONE_PRODUCT:
            return {
                oneProduct: action.payload, loading: false
            }
        case GET_PRODUCT_LIKE:
            return {
                ...state, productLike: action.payload, loading: false
            }
        case DELETE_PRODUCT:
            return {
                deleteProduct: action.payload, loading: false
            }
        case UPDATE_PRODUCT:
            return {
                updateProduct: action.payload, loading: false
            }

        case GET_ERROR:
            return {
                product: action.payload, loading: true
            }
        default:
            return state

    }
}