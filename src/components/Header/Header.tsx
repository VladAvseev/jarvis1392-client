import React from 'react';
import style from './Header.module.css';
import HeaderProfile from "./HeaderProfile/HeaderProfile";

const Header: React.FC = () => {

    return (
        <header className={style.main}>
            <h1 className={style.title}>Jarvis1392</h1>
            <HeaderProfile />
        </header>
    );
};

export default Header;