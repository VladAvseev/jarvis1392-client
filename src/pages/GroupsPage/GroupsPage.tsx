import React, {useEffect} from 'react';
import style from './GroupsPage.module.css';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import GroupList from "../../components/GroupList/GroupList";

const GroupsPage = () => {
    const {groups} = useTypedSelector((state) => state.group);
    const {getGroups} = useActions();

    useEffect(() => {
        getGroups();
    }, [])

    return (
        <div className={style.main}>
            <h1>Все группы:</h1>
            {groups.length ? <GroupList groups={groups}/> : null}
        </div>
    );
};

export default GroupsPage;