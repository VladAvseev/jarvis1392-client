import {Dispatch} from "redux";
import {UserAction, UserActions} from "../../models/user/UserActions";
import {authAPI} from "../../api/authAPI";
import {userApi} from "../../api/userAPI";

export const login = (email: string, password: string) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActions.LOGIN_USER});
            const res = await authAPI.login(email, password);
            localStorage.setItem('token', res.data.accessToken);
            dispatch({type: UserActions.LOGIN_USER_SUCCESS, payload: res.data.user});
        } catch (error: any) {
            dispatch({type: UserActions.LOGIN_USER_ERROR, payload: error.response.data.message});
        }
    }
}

export const registration = (email: string, password: string, username: string) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActions.REGISTRATION_USER});
            const res = await authAPI.registration(email, password, username);
            localStorage.setItem('token', res.data.accessToken);
            dispatch({type: UserActions.REGISTRATION_USER_SUCCESS, payload: res.data.user});
        } catch (error: any) {
            dispatch({type: UserActions.REGISTRATION_USER_ERROR, payload: error.response.data.message});
        }
    }
}


export const logout = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            const res = await authAPI.logout();
            localStorage.removeItem('token');
            dispatch({type: UserActions.LOGOUT_USER});
        } catch (error) {
            console.log(error);
        }
    }
}

export const checkAuth = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActions.LOGIN_USER});
            const res = await authAPI.refresh();
            dispatch({type: UserActions.LOGIN_USER_SUCCESS, payload: res.data.user});
        } catch (error) {
            dispatch({type: UserActions.LOGIN_USER_ERROR, payload: 'Ошибка авторизации'});
        }
    }
}

export const changeUsername = (_id: string, newName: string) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
           const res = await userApi.changeUsername(_id, newName);
           dispatch({type: UserActions.CHANGE_NAME, payload: res.data});
        } catch (error) {
            console.log(error);
        }
    }
}