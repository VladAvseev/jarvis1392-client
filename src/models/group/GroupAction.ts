import {IGroup} from "./IGroup";

export interface GroupState {
    groups: IGroup[];
}

export enum GroupActions {
    FETCH_GROUPS = 'FETCH_GROUPS',
    ADD_GROUP = 'ADD_GROUP'
}

interface FetchGroups {
    type: GroupActions.FETCH_GROUPS;
    payload: IGroup[];
}

interface AddGroup {
    type: GroupActions.ADD_GROUP;
    payload: IGroup;
}

export type GroupAction = FetchGroups | AddGroup