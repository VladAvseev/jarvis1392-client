import React from 'react';
import style from './LoginPage.module.css';
import LoginForm from "../../components/AuthForms/LoginForm";
import {Route, Routes} from "react-router-dom";
import RegistrationForm from "../../components/AuthForms/RegistrationForm";

const LoginPage = () => {
    return (
        <div className={style.page}>
            <LoginForm />
        </div>
    );
};

export default LoginPage;