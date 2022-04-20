import { userActionTypes } from './user.types';

const INITIAL_STATE = {
    loading: false,
    access: localStorage.getItem('access'),
    refresh: localStorage.getItem('refresh'),
    isAuthenticated : false,
    userInfo: null,
    signinupHidden: true,
}


export const userLoginReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case userActionTypes.TOGGLE_SIGNINUP_HIDDEN:
            return {
                ...state,
                signinupHidden: !state.signinupHidden
            }
        case userActionTypes.USER_LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            }
            case userActionTypes.USER_LOGIN_SUCCESS:
                localStorage.setItem('access', action.payload.access)
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                access: action.payload.access,
                refresh: action.payload.refresh,
            }
            case userActionTypes.USER_LOADED_SUCCESS:
                return {
                    ...state,
                    userInfo: action.payload
                }
            case userActionTypes.USER_LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
            case userActionTypes.USER_LOADED_FAIL:
                return {
                    ...state,
                    userInfo: action.payload
                }

            // если забыл пароль 
            case userActionTypes.PASSWORD_RESET_SUCCES:
                return {...state}
            case userActionTypes.PASSWORD_RESET_FAIL:
                return {...state}
            case userActionTypes.PASSWORD_RESET_CONFIRM_SUCCES:
                return {...state}
            case userActionTypes.PASSWORD_RESET_CONFIRM_FAIL:
                return {...state}
            
            // выход 
            case userActionTypes.USER_LOG_OUT:
            return {
                loading: false, 
                userInfo: null,
                signinupHidden: true,
            }
            
        default: return state;
    
    }
}


export const userRegisterReducer = (state = { loading: false, userInfo: null }, action) => {
    switch (action.type){
        case userActionTypes.USER_REGISTER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case userActionTypes.USER_REGISTER_SUCCESS:
            return {
                loading: false,
                userInfo: action.payload,
            }
        case userActionTypes.USER_REGISTER_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case userActionTypes.ACTIVATION_SUCCESS:
            return {...state}
        case userActionTypes.ACTIVATION_FAIL:
            return {...state, error: action.payload}
        default: return state;
    
    }
}


export const userDetailsReducer = (state = { loading: false, user: null }, action) => {
    switch (action.type){
        case userActionTypes.USER_DETAIL_REQUEST:
            return {
                ...state,
                loading: true
            }
            case userActionTypes.USER_DETAIL_SUCCESS:
            return {
                loading: false,
                user: action.payload,
            }
            case userActionTypes.USER_DETAIL_FAIL:
            return {
                loading: false,
                error: action.payload
            }
            case userActionTypes.USER_DETAIL_RESET:
            return {user: {}   }
        default: return state;
    
    }
}


export const userUpdateProfileReducer = (state = {}, action) => {
    switch (action.type){
        case userActionTypes.USER_UPDATE_PROFILE_REQUEST:
            return {
                loading: true
            }
            case userActionTypes.USER_UPDATE_PROFILE_SUCCESS:
            return {
                loading: false,
                success: true,
                userInfo: action.payload,
            }
            case userActionTypes.USER_UPDATE_PROFILE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
            case userActionTypes.USER_UPDATE_PROFILE_RESET:
                return {}
        default: return state;
    
    }
}