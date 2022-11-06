import React from 'react';
import style from "./GroupList.module.css";
import GroupItem from "./GroupItem/GroupItem";
import {IGroup} from "../../models/group/IGroup";

interface props {
    groups: IGroup[]
}

const GroupList: React.FC<props>  = ({groups}) => {
    return (
        <div className={style.main}>
            {groups.map((group) => <GroupItem key={group._id} owner={group.owner} name={group.name}/>)}
        </div>
    );
};

export default GroupList;