import {useDispatch} from "react-redux";
import * as UserActionCreators from '../store/action-creators/user';
import * as GroupActionCreators from '../store/action-creators/groups';
import * as AsideActionCreators from '../store/action-creators/aside';
import {bindActionCreators} from "redux";

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators({
        ...UserActionCreators,
        ...GroupActionCreators,
        ...AsideActionCreators
        }, dispatch);
}