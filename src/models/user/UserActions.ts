import {IUser} from "./IUser";

export interface UserState {
    isAuth: boolean;
    user: IUser;
    isLoading: boolean;
    loginError: string;
    registrationError: string;
}

export enum UserActions {
    LOGIN_USER = 'LOGIN_USER',
    LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS',
    LOGIN_USER_ERROR = 'LOGIN_USER_ERROR',
    REGISTRATION_USER = 'REGISTRATION_USER',
    REGISTRATION_USER_SUCCESS = 'REGISTRATION_USER_SUCCESS',
    REGISTRATION_USER_ERROR = 'REGISTRATION_USER_ERROR',
    LOGOUT_USER = 'LOGOUT_USER',
    CHANGE_NAME = 'CHANGE_NAME',
}

interface LoginUser {
    type: UserActions.LOGIN_USER;
}

interface LoginUserSuccess {
    type: UserActions.LOGIN_USER_SUCCESS;
    payload: IUser;
}

interface LoginUserError {
    type: UserActions.LOGIN_USER_ERROR;
    payload: string;
}

interface RegistrationUser {
    type: UserActions.REGISTRATION_USER;
}

interface RegistrationUserSuccess {
    type: UserActions.REGISTRATION_USER_SUCCESS;
    payload: IUser;
}

interface RegistrationUserError {
    type: UserActions.REGISTRATION_USER_ERROR;
    payload: string;
}

interface LogoutUser {
    type: UserActions.LOGOUT_USER;
}

interface ChangeName {
    type: UserActions.CHANGE_NAME;
    payload: string;
}

export type UserAction =
    LoginUser |
    LoginUserSuccess |
    LoginUserError |
    RegistrationUser |
    RegistrationUserSuccess |
    RegistrationUserError |
    LogoutUser |
    ChangeName