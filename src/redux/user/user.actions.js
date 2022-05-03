// Так прописывается действие (action)
// это обект с параметрами тип и пэйлоад
import axios from "axios";
import {userActionTypes} from './user.types';
import { ordersActionTypes } from "../orders/orders.types";


export const signinupHidden = ()=> (
    {
        type: userActionTypes.TOGGLE_SIGNINUP_HIDDEN
    }
)

export const loadUser =() => async dispatch => {
    if (localStorage.getItem('access')){
        const config = {
            headers : {
                'Content-Type' : 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json',
            }
        }

        try {
            const {data} = await axios.get('/auth/users/me/', config)

            dispatch({
                type: userActionTypes.USER_LOADED_SUCCESS,
                payload: data
            })

        } catch (error) {
            dispatch({
                type: userActionTypes.USER_LOADED_FAIL
            })
        }
    } else {
        dispatch({
            type: userActionTypes.USER_LOADED_FAIL
        })
    }

}

export const login = (email, password) => async(dispatch) =>  {
    try {
        dispatch( {type: userActionTypes.USER_LOGIN_REQUEST})


        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        // При звонке сервер сгенерирует токен для пользователя и пошлет его на фронт
        const {data} = await axios.post(
            '/auth/jwt/create/', {email: email, password: password} ,
            config
        )

        dispatch({
            type: userActionTypes.USER_LOGIN_SUCCESS,
            payload: data
        })

        // Запуск функции для загрузки пользователя
        dispatch(loadUser())
    }
    catch (error) {
        // Обработчик для ошибки, если сервер присылает что-то неправильное
        dispatch({
            type: userActionTypes.USER_LOGIN_FAIL,
            payload: error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        })

    }
}


export const logOut = () => (dispatch) => {
           dispatch({ type : userActionTypes.USER_DETAIL_RESET})
           dispatch({type: userActionTypes.USER_LOG_OUT}) 
           dispatch({type: ordersActionTypes.ORDER_LIST_MY_RESET}) 

}


// Регистрация пользователя
export const register = (name, email, password, re_password) => async(dispatch) =>  {
    try {
        dispatch( {type: userActionTypes.USER_REGISTER_REQUEST})


        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        // При звонке сервер сгенерирует токен для пользователя и пошлет его на фронт
        const {data} = await axios.post(
            '/auth/users/', {name: name, email: email, password: password, re_password: re_password} ,
            config
        )

        dispatch({
            type: userActionTypes.USER_REGISTER_SUCCESS,
            payload: data
        })
    }
    catch (error) {
        // Обработчик для ошибки, если сервер присылает что-то неправильное
        dispatch({
            type: userActionTypes.USER_REGISTER_FAIL,
            payload: error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        })

    }
}

// Загрузка информации о пользователе на страницу /profile
export const getUserDetails = (id) => async(dispatch) =>  {
    try {
        dispatch( {type: userActionTypes.USER_DETAIL_REQUEST})

        const config = {
            headers: {
                'Content-type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json',
            }
        }

        // При звонке сервер сгенерирует токен для пользователя и пошлет его на фронт
        const {data} = await axios.get(
            `/api/users/${id}`,
            config
        )

        dispatch({
            type: userActionTypes.USER_DETAIL_SUCCESS,
            payload: data
        })


    }
    catch (error) {
        // Обработчик для ошибки, если сервер присылает что-то неправильное
        dispatch({
            type: userActionTypes.USER_DETAIL_FAIL,
            payload: error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        })

    }
}

export const updateUserProfile = (user) => async(dispatch) =>  {
    try {
        dispatch( {type: userActionTypes.USER_UPDATE_PROFILE_REQUEST})

        const config = {
            headers: {
                // 'Content-type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`
            }
        }

        // При звонке сервер сгенерирует токен для пользователя и пошлет его на фронт
        const {data} = await axios.put(
            `/api/users/profile/update`, user,
            config
        )

        dispatch({
            type: userActionTypes.USER_UPDATE_PROFILE_SUCCESS,
            payload: data
        })

        dispatch(login())
        dispatch(loadUser())


    }
    catch (error) {
        // Обработчик для ошибки, если сервер присылает что-то неправильное
        dispatch({
            type: userActionTypes.USER_UPDATE_PROFILE_FAIL,
            payload: error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        })

    }
}


// Активация аккаунта после регистрации и сразу вход на сайт
export const activateAccount = (uid, token) => async dispatch => {
    const config = {
        headers : {
            'Content-Type' : 'application/json'
        }
    }

    // const body = JSON.stringify({uid, token})
    try {
        await axios.post('/auth/users/activation/', {uid: uid, token: token}, config)

        dispatch({
            type: userActionTypes.ACTIVATION_SUCCESS,

        })

    } catch (error) {
        dispatch({
            type: userActionTypes.ACTIVATION_FAIL
        })
    }
}

// запрос на востанавление пароля
export const resetPassword = (email)=> async dispatch =>  {
    const config = {
        headers : {
            'Content-Type' : 'application/json'
        }
    }

    const body = JSON.stringify({email})

    try {
        await axios.post('/auth/users/reset_password/', body, config)

        dispatch({
            type: userActionTypes.PASSWORD_RESET_SUCCES
        })
    } catch (error) {
        dispatch({
            type: userActionTypes.PASSWORD_RESET_FAIL
        })
    }
}


// Восстановление пароля
export const resetPasswordConfirm = (uid, token, new_password, re_new_password)=> async dispatch => {
    const config = {
        headers : {
            'Content-Type' : 'application/json'
        }
    }
    const body = JSON.stringify({uid, token, new_password, re_new_password})

    try {
        await axios.post('/auth/users/reset_password_confirm/', body, config)

        dispatch({
            type: userActionTypes.PASSWORD_RESET_CONFIRM_SUCCES
        })
    } catch (error) {
        dispatch({
            type: userActionTypes.PASSWORD_RESET_CONFIRM_FAIL
        })
    }
}