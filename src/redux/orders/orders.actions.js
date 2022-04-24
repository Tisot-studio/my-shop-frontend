import axios from "axios";
import { ordersActionTypes } from "./orders.types";


export const createOrder = (order) => async(dispatch) =>  {
    try {
        dispatch( {type: ordersActionTypes.ORDER_CREATE_REQUEST})
        const config = {
            headers: {
                'Content-type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`
            }
        }
// ===============================================================

        const {data} = await axios.post(
            `/api/orders/add`, order, config
        )

        dispatch({
            type: ordersActionTypes.ORDER_CREATE_SUCCESS,
            payload: data
        })

    }
    catch (error) {
        // Обработчик для ошибки, если сервер присылает что-то неправильное
        dispatch({
            type: ordersActionTypes.ORDER_CREATE_FAIL,
            payload: error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        })

    }
}

// Получаем информацию о заказе
export const getOrderDetails = (id) => async (dispatch) => {

    try{
        dispatch({
          type: ordersActionTypes.ORDER_DETAILS_REQUEST
        })
  
      const config = {
        headers: {
          'Content-type': 'application/json',
          'Authorization': `JWT ${localStorage.getItem('access')}`
        }
      }
  
      const {data} = await axios.get(`/api/order/${id}`, config)
  
      dispatch({
        type: ordersActionTypes.ORDER_DETAILS_SUCCESS,
        payload: data
      })
  
    }
    catch(error) {
      dispatch({
        type: ordersActionTypes.ORDER_DETAILS_FAIL,
        payload: error.response && error.response.data.deatail ?
        error.response.data.deatail
        : error.message
      })
    }
  }


// Получаем список всех заказов пользователя
export const getMyOrders = () => async (dispatch) => {

  try{
      dispatch({
        type: ordersActionTypes.ORDER_LIST_MY_REQUEST
      })
      
    const config = {
      headers: {
        'Content-type': 'application/json',
        'Authorization': `JWT ${localStorage.getItem('access')}`
      }
    }

    const {data} = await axios.get(`/api/my_orders`, config)

    dispatch({
      type: ordersActionTypes.ORDER_LIST_MY_SUCCESS,
      payload: data
    })

  }
  catch(error) {
    dispatch({
      type: ordersActionTypes.ORDER_LIST_MY_FAIL,
      payload: error.response && error.response.data.deatail ?
      error.response.data.deatail
      : error.message
    })
  }
}


// Оплата заказа
export const payOrder = (id, paymentResult) => async (dispatch) => {

  try{
      dispatch({
        type: ordersActionTypes.ORDER_PAY_REQUEST
      })

    const config = {
      headers: {
        'Content-type': 'application/json',
        'Authorization': `JWT ${localStorage.getItem('access')}`
      }
    }

    const {data} = await axios.put(`/api/order/${id}/pay`, paymentResult, config)

    dispatch({
      type: ordersActionTypes.ORDER_PAY_SUCCESS,
      payload: data
    })

  }
  catch(error) {
    dispatch({
      type: ordersActionTypes.ORDER_PAY_FAIL,
      payload: error.response && error.response.data.deatail ?
      error.response.data.deatail
      : error.message
    })
  }
}