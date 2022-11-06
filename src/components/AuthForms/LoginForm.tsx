import React, {useState} from 'react';
import style from './AuthForm.module.css';
import ButtonBlue from "../UI/ButtonBlue/ButtonBlue";
import {Link} from "react-router-dom";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import LoaderSpinner from "../UI/LoaderSpinner/LoaderSpinner";

const LoginForm: React.FC = () => {
    const {isLoading, loginError} = useTypedSelector((state) => state.auth);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const {login} = useActions();

    return (
        <div className={style.main}>
            <header className={style.header}>Авторизация</header>
            <div className={style.content}>
                <div className={style.input__item}>
                    <label>Почта:</label>
                    <input
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }}
                        value={email}
                        className={style.input}
                        type={'email'}
                    />
                </div>
                <div className={style.input__item}>
                    <label>Пароль:</label>
                    <input
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }}
                        value={password}
                        className={style.input}
                        type={'password'}
                    />
                </div>
                {isLoading
                    ? <LoaderSpinner size={40}/>
                    : <>
                        <h3 style={{color: '#AA0000'}}>{loginError}</h3>
                        <ButtonBlue
                            handler={() => login(email, password)}
                            text={'Войти'}
                            width={280}
                        />
                    </>}
                <Link className={style.link} to={'/registration'}>на зарегистрованы</Link>
                <p>Забыли пароль? Не забыл</p>
            </div>
        </div>
    );
};

export default LoginForm;