export enum ActionTypes {
    REGISTER = '[Auth] Register',
    REGISTER_SUCCESS = '[Auth] Register Sucess',
    REGISTER_FAILURE = '[Auth] Register Failure',

    LOGIN = '[Auth] Login',
    LOGIN_SUCCESS = '[Auth] Login Sucess',
    LOGIN_FAILURE = '[Auth] Login Failure',

    GET_CURRENT_USER = '[Auth] Get Current User',
    GET_CURRENT_USER_SUCCESS = '[Auth] Get Current User Sucess',
    GET_CURRENT_USER_FAILURE = '[Auth] Get Current User Failure',

    UPDATE_CURRENT_USER = '[Auth] Update Current User',
    UPDATE_CURRENT_USER_SUCCESS = '[Auth] Update Current User Sucess',
    UPDATE_CURRENT_USER_FAILURE = '[Auth] Update Current User Failure',

    LOGOUT = '[Auth] Logout'
}