import React from 'react';
import style from './Aside.module.css';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import {Link} from "react-router-dom";
import ButtonWhite from "../UI/ButtonWhite/ButtonWhite";

const Aside: React.FC = () => {
    const {isOpen} = useTypedSelector((state) => state.aside);
    const {username} = useTypedSelector((state) => state.auth.user);
    const {logout} = useActions();

    return (
        <div className={isOpen ? style.main__open : style.main__close}>
            <div>
                <h2 style={{color: '#ffffff'}}>{username}</h2>
                <ul>
                    <li>
                        <Link className={style.link} to={'/profile'}>Профиль</Link>
                    </li>
                    <li>
                        <Link className={style.link} to={'/groups'}>
                            Группы
                        </Link>
                    </li>
                    <li>
                        <Link className={style.link} to={'/create-group'}>
                            Создать группу
                        </Link>
                    </li>
                </ul>
            </div>
            <ButtonWhite handler={() => logout()} text={'Выйти'}/>
        </div>
    );
};

export default Aside;