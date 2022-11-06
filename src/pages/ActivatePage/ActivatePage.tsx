import React from 'react';
import style from './ActivatePage.module.css';
import ButtonBlue from "../../components/UI/ButtonBlue/ButtonBlue";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const ActivatePage = () => {
    const {user} = useTypedSelector((state) => state.auth);
    const {logout} = useActions();

    return (
        <div className={style.main}>
            <h3>Требуется активания</h3>
            <h1>Аккаунт успешно зарегистрирован!</h1>
            <h2>На почту {user.email} пришло письмо</h2>
            <h2>Перейдите по ссылке для активации аккаунта</h2>
            <ButtonBlue handler={() => logout()} text={'Выйти'}/>
        </div>
    );
};

export default ActivatePage;