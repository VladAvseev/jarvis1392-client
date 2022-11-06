import React from 'react';
import style from './RegistrationPage.module.css';
import RegistrationForm from "../../components/AuthForms/RegistrationForm";

const RegistrationPage = () => {
    return (
        <div className={style.page}>
            <RegistrationForm />
        </div>
    );
};

export default RegistrationPage;
