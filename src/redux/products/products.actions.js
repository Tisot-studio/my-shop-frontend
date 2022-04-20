import axios from "axios";
import { productsActionTypes } from "./products.types";

export const listProducts = ()=> async (dispatch)=>
    {
        try {
            dispatch( {type: productsActionTypes.PRODUCT_LIST_REQUEST})
            const {data} = await axios.get('/api/products')

            dispatch({
                type: productsActionTypes.PRODUCT_LIST_SUCCES,
                payload: data
            })
        }
        catch (error) {
            // Обработчик для ошибки, если сервер присылает что-то неправильное
            dispatch({
                type: productsActionTypes.PRODUCT_LIST_FAIL,
                payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
            })

        }
    }
