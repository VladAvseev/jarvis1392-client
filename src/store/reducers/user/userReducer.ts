import {IUser} from "../../../models/user/IUser";
import {UserAction, UserActions, UserState} from "../../../models/user/UserActions";

const initialState: UserState = {
    isAuth: false,
    user: {} as IUser,
    isLoading: false,
    loginError: '',
    registrationError: '',
}

export const userReducer = (state = initialState, action: UserAction): UserState  => {
    switch (action.type) {
        case UserActions.LOGIN_USER:
            return {...state, isLoading: true, loginError: ''};
        case UserActions.LOGIN_USER_ERROR:
            return {...state, isLoading: false, loginError: action.payload};
        case UserActions.LOGIN_USER_SUCCESS:
            return {...state, isAuth: true, user: action.payload, isLoading: false,  loginError: ''};
        case UserActions.REGISTRATION_USER:
            return {...state, isLoading: true, registrationError: ''};
        case UserActions.REGISTRATION_USER_ERROR:
            return  {...state, isLoading: false, registrationError: action.payload};
        case UserActions.REGISTRATION_USER_SUCCESS:
            return {...state, isAuth: true, user: action.payload, isLoading: false, registrationError: ''};
        case UserActions.LOGOUT_USER:
            return initialState;
        case UserActions.CHANGE_NAME:
            return {...state, user: {...state.user, username: action.payload}}
        default:
            return state;
    }
}