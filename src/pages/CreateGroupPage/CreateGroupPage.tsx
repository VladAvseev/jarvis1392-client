import React, {useState} from 'react';
import style from './CreateGroupPage.module.css';
import ButtonBlue from "../../components/UI/ButtonBlue/ButtonBlue";
import {useActions} from "../../hooks/useActions";
import {groupAPI} from "../../api/groupAPI";
import {useTypedSelector} from "../../hooks/useTypedSelector";


const CreateGroupPage: React.FC = () => {
    const {user} = useTypedSelector((state) => state.auth);
    const {groups} = useTypedSelector((state) => state.group);
    const [groupName, setGroupName] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const {addGroup} = useActions();

    const createGroup = async () => {
        try {
            const res = await groupAPI.createGroup(groupName, user._id);
            const group = res.data;
            if (group && groups.length) {
                setGroupName('');
                setMessage('Группа создана');
                addGroup(group);
            }
        } catch (error) {
            setMessage('Группа с таким названием уже существует');
        }
    }

    return (
        <div className={style.main}>
            <h3>Создать группу</h3>
            <div className={style.input__item}>
                <label>Название:</label>
                <input
                    onChange={(event) => {
                        setGroupName(event.target.value);
                    }}
                    value={groupName}
                    className={style.input}
                    type={'email'}
                />
                {message ? <h4>{message}</h4> : null}
                <ButtonBlue handler={() => createGroup()} text='создать'/>
            </div>
        </div>
    );
};

export default CreateGroupPage;