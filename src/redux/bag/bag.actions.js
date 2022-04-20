import { bagActionTypes } from "./bag.types";

export const toggleBagHidden = ()=> (
    {
        type: bagActionTypes.TOGGLE_BAG_HIDDEN,

    }
)

export const addItem = (item, prodQty)=> ({
    type: bagActionTypes.ADD_ITEM,
    payload: item, 
    qtyFromProductPage: prodQty,
})


export const clearItemFromBag = item => ({
    type: bagActionTypes.CLEAR_ITEM_FROM_BAG,
    payload: item
})

export const removeItem = item => ({
    type: bagActionTypes.REMOVE_ITEM_FROM_BAG,
    payload: item
})


export const saveShippingAddress = (data) => (dispatch)=> {
        dispatch({
            type: bagActionTypes.SAVE_SHIPPING_ADDRESS,
            payload: data
        }) 
}


export const bagReset = () => (dispatch)=> {
    dispatch({
        type: bagActionTypes.BAG_RESET,
    }) 
}