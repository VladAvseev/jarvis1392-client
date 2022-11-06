import {combineReducers} from "redux";
import {userReducer} from "./user/userReducer";
import {groupReducer} from "./groups/groupReducer";
import {asideReducer} from "./aside/asideReducer";

export const rootReducer = combineReducers({
    auth: userReducer,
    group: groupReducer,
    aside: asideReducer,
});
