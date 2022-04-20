import { ordersActionTypes } from "./orders.types";



export const createOrderReducer = (state={}, action)=>{
    switch(action.type) {
        case ordersActionTypes.ORDER_CREATE_REQUEST:
            return { 
                loading: true 
            }
        case ordersActionTypes.ORDER_CREATE_SUCCESS:
            return { 
                loading: false,
                success: true,
                order: action.payload

            }
        case ordersActionTypes.ORDER_CREATE_FAIL:
            return { 
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
        
}


export const orderDetailsReducer = (state = {loading: true, }, action)=> {
      switch (action.type) {
        case ordersActionTypes.ORDER_DETAILS_REQUEST:
          return {
            loading: true
          }
        case ordersActionTypes.ORDER_DETAILS_SUCCESS:
          return {
            loading: false,
            order: action.payload
          }
        case ordersActionTypes.ORDER_DETAILS_FAIL:
          return {
            loading: false,
            error: action.payload
          }
        default: return state
      }
    
    }



export const orderListMyReducer = (state = {orders:[]}, action)=> {
  switch (action.type) {
    case ordersActionTypes.ORDER_LIST_MY_REQUEST:
      return {
        loading: true
      }
    case ordersActionTypes.ORDER_LIST_MY_SUCCESS:
      return {
        loading: false,
        orders: action.payload
      }
    case ordersActionTypes.ORDER_LIST_MY_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    case ordersActionTypes.ORDER_LIST_MY_RESET:
      return {orders: []}

    default: return state
  }

}


// Оплата заказа
export const orderPayReducer = (state = {}, action)=> {
  switch (action.type) {
    case ordersActionTypes.ORDER_PAY_REQUEST:
      return {
        loading: true
      }
    case ordersActionTypes.ORDER_PAY_SUCCESS:
      return {
        loading: false,
        success: true,
      }
    case ordersActionTypes.ORDER_PAY_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    case ordersActionTypes.ORDER_PAY_RESET:
      return {}

    default: return state
  }

}