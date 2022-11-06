import React from 'react';
import style from './HeaderProfile.module.css';
import MenuButton from "../../UI/MenuButton/MenuButton";
import {useActions} from "../../../hooks/useActions";

const HeaderProfile = () => {
    const {toggle} = useActions();

    return (
        <div className={style.main}>
            <MenuButton handler={() => toggle()}/>
        </div>
    );
};

export default HeaderProfile;