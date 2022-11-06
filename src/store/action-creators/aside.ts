import {Dispatch} from "redux";
import {AsideAction, AsideActions} from "../reducers/aside/asideReducer";

export const toggle = () => {
    return async (dispatch: Dispatch<AsideAction>) => {
        try {
            dispatch({type: AsideActions.TOGGLE});
        } catch (error) {
            console.log(error);
        }
    }
}