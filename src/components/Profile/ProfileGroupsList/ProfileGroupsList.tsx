import React, {useEffect, useState} from 'react';
import {IGroup} from "../../../models/group/IGroup";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {groupAPI} from "../../../api/groupAPI";

const ProfileGroupsList = () => {
    const {_id} = useTypedSelector((state) => state.auth.user);
    const [userGroups, setUserGroups] = useState<IGroup[]>([]);
    const {groups} = useTypedSelector((state) => state.group);

    useEffect(() => {
        (async () => {
            const res = await groupAPI.getUserGroup(_id);
            setUserGroups(res.data);
        })();
    }, [groups]);

    return (
        <div>
            <h3>Ваши группы:</h3>
            {userGroups.length
                ?  <ul>{userGroups.map((group) => <li key={group._id}>{group.name}</li>)}</ul>
                :  <p>Вы не создавали группу</p>
            }
        </div>
    );
};

export default ProfileGroupsList;