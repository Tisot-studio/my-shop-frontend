import { productsActionTypes } from "./products.types"

const INITIAL_STATE = {
    products: [],
    loading: true
}

const productReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case productsActionTypes.PRODUCT_LIST_REQUEST:
            return {
                loading: true,
                products: []
            }
        case productsActionTypes.PRODUCT_LIST_SUCCES:
            return {
                loading: false,
                products: action.payload
            }
        case productsActionTypes.PRODUCT_LIST_FAIL:
            return {
                loading: false,
                error: action.payload
            }
            default:
                return state
    }
}

export default productReducer;