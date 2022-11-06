import {GroupAction, GroupActions, GroupState} from "../../../models/group/GroupAction";

const initialState: GroupState = {
    groups: [],
}

export const groupReducer = (state = initialState, action: GroupAction): GroupState  => {
    switch (action.type) {
        case GroupActions.FETCH_GROUPS:
            return {groups: action.payload};
        case GroupActions.ADD_GROUP:
            return {groups: [...state.groups, action.payload]};
        default:
            return state;
    }
}