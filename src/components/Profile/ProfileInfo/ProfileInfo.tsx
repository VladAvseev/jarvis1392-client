import React, {useState} from 'react';
import style from './ProfileInfo.module.css';
import defaultAvatar from '../../../assets/images/default-profile-avatar.jpg';
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import ButtonBlue from "../../UI/ButtonBlue/ButtonBlue";
import {useActions} from "../../../hooks/useActions";

const ProfileInfo = () => {
    const {username, email, _id} = useTypedSelector((state) => state.auth.user);
    const [inputUsername, setInputUsername] = useState<string>(username);
    const [editProfile, setEditProfile] = useState<boolean>(false);
    const {changeUsername} = useActions();

    return (
        <div>
            <div className={style.avatar}>
                <img className={style.avatar__image} src={defaultAvatar} alt="avatar"/>
            </div>
            {!editProfile
                ?
                    <h1 className={style.username}>{username}</h1>
                :
                    <input className={style.profile__input__username} type="text" value={inputUsername} onChange={(event) => setInputUsername(event.target.value)}/>}
            <h2 className={style.email}>{email}</h2>
            {!editProfile
                ?
                    <ButtonBlue handler={() => setEditProfile((prev) => !prev)} text={'Изменить профиль'}/>
                :
                    <div style={{display: 'flex', gap: '20px'}}>
                        <ButtonBlue
                            handler={() => {
                                if(inputUsername !== username) {
                                    changeUsername(_id, inputUsername);
                                }
                                setEditProfile((prev) => !prev);
                            }}
                            text={'Сохранить'}
                        />
                        <ButtonBlue handler={() => setEditProfile((prev) => !prev)} text={'Отменить'}/>
                    </div>
            }
        </div>
    );
};

export default ProfileInfo;