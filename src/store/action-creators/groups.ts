import {Dispatch} from "redux";
import {GroupAction, GroupActions} from "../../models/group/GroupAction";
import {groupAPI} from "../../api/groupAPI";
import {IGroup} from "../../models/group/IGroup";

export const getGroups = () => {
    return async (dispatch: Dispatch<GroupAction>) => {
        try {
            const res = await groupAPI.getGroups();
            dispatch({type: GroupActions.FETCH_GROUPS, payload: res.data});
        } catch (error) {
            console.log(error);
        }
    }
}

export const addGroup = (group: IGroup) => {
    return async (dispatch: Dispatch<GroupAction>) => {
        try {
            dispatch({type: GroupActions.ADD_GROUP, payload: group});
        } catch (error) {
            console.log(error);
        }
    }
}
