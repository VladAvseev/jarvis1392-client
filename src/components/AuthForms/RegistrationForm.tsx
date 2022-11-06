import React, {useState} from 'react';
import style from './AuthForm.module.css';
import ButtonBlue from "../UI/ButtonBlue/ButtonBlue";
import {Link} from "react-router-dom";
import ErrorMessage from "../UI/ErrorMessage/ErrorMessage";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import LoaderSpinner from "../UI/LoaderSpinner/LoaderSpinner";

interface RegistrationInput {
    username: string;
    nameError: boolean;
    email: string;
    emailError: boolean;
    password: string;
    passwordError: boolean;
    matchPassword: string;
    matchPasswordError: boolean;
}

const EMAIL_VALIDATION = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.+[a-zA-Z0-9-]{2,}$/;

const RegistrationForm: React.FC = () => {
    const [inputState, setInputState] = useState<RegistrationInput>({
        username: '',
        nameError: true,
        email: '',
        emailError: true,
        password: '',
        passwordError: true,
        matchPassword: '',
        matchPasswordError: false
    });
    const {isLoading, registrationError} = useTypedSelector((state) => state.auth);
    const {registration} = useActions();

    return (
        <div>
            <div className={style.main}>
                <header className={style.header}>Регистрация</header>
                <div className={style.content}>
                    <div className={style.input__item}>
                        <label>Имя:</label>
                        <input
                            className={style.input}
                            type={'text'}
                            value={inputState.username}
                            onChange={(e) => {
                                const value = e.target.value;
                                if (value.length < 32) {
                                    setInputState((prev) => ({...prev, username: value, nameError: false}));
                                }
                                if (value.length < 2) {
                                    setInputState((prev) => ({...prev, nameError: true}));
                                }
                            }}
                            />
                        {inputState.nameError ? (
                            <ErrorMessage text={'Имя должно быть от 3 до 32 символов'}/>
                        ) : null}
                    </div>
                    <div className={style.input__item}>
                        <label>Почта:</label>
                        <input
                            className={style.input}
                            type={'email'}
                            value={inputState.email}
                            onChange={(e) => {
                                const value = e.target.value;
                                setInputState((prev) => ({...prev, email: value, emailError: false}));
                                if (!EMAIL_VALIDATION.test(value)) {
                                    setInputState((prev) => ({...prev, emailError: true}));
                                }
                            }}
                        />
                        {inputState.emailError ? (
                            <ErrorMessage text={'Пример: xxx@xxx.xxx'}/>
                        ) : null}
                    </div>
                    <div className={style.input__item}>
                        <label>Пароль:</label>
                        <input
                            className={style.input}
                            type={'password'}
                            value={inputState.password}
                            onChange={(e) => {
                                const value = e.target.value;
                                if (value.length < 32) {
                                    setInputState((prev) => ({...prev, password: value, passwordError: false}));
                                }
                                if (value.length < 3) {
                                    setInputState((prev) => ({...prev, passwordError: true}));
                                }
                            }}
                        />
                        {inputState.passwordError ? (
                            <ErrorMessage text={'Пароль должно быть от 3 до 32 символов'}/>
                        ) : null}
                    </div>
                    <div className={style.input__item}>
                        <label>Повторите пароль:</label>
                        <input
                            className={style.input}
                            type={'password'}
                            value={inputState.matchPassword}
                            onChange={(e) => {
                                const value = e.target.value;
                                setInputState((prev) => ({...prev, matchPassword: value, matchPasswordError: false}));
                                if (value !== inputState.password) {
                                    setInputState((prev) => ({...prev, matchPasswordError: true}));
                                }
                            }}
                        />
                        {inputState.matchPasswordError ? (
                            <ErrorMessage text={'Пароли не совпадают'}/>
                        ) : null}
                    </div>
                    {isLoading
                        ? <LoaderSpinner size={40}/>
                        : <>
                            <h3 style={{color: '#AA0000'}}>{registrationError}</h3>
                            <ButtonBlue handler={() => {
                                if (!inputState.nameError && !inputState.emailError && !inputState.passwordError && !inputState.matchPasswordError) {
                                    registration(inputState.email, inputState.password, inputState.username);
                                }
                            }} text={'Зарегистрироваться'} />
                        </>}
                    <Link className={style.link} to={'/login'}>Назад</Link>
                </div>
            </div>
        </div>
    );
};

export default RegistrationForm;