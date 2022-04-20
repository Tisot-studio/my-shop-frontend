import { bagActionTypes } from "./bag.types";
import { addItemToBag, removeItemFromBag } from "./bag.utils";


const INITIAL_STATE = {
    hidden: true,
    bagItems: [],
    shippingAdress: {}
}

const bagReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case bagActionTypes.TOGGLE_BAG_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case bagActionTypes.ADD_ITEM:
            return {
                ...state,
                bagItems: addItemToBag(state.bagItems, action.payload, action.qtyFromProductPage),
            }
        case bagActionTypes.REMOVE_ITEM_FROM_BAG:
        return {
            ...state,
            bagItems: removeItemFromBag(state.bagItems, action.payload)
            }    
        case bagActionTypes.CLEAR_ITEM_FROM_BAG:
            return {
                ...state,
                bagItems: state.bagItems.filter(
                    bagItem => bagItem._id !== action.payload._id
                )
            }
        case bagActionTypes.SAVE_SHIPPING_ADDRESS:
            return {
                ...state,
                shippingAdress: action.payload
            }
        case bagActionTypes.BAG_RESET:
            return {
                ...state,
                bagItems: [],
                shippingAdress: {}
            }

            default:
                return state
    }
}

export default bagReducer;