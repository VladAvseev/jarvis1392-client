import React from 'react';
import style from './MenuButton.module.css';

interface props {
    handler: () => void;
}

const MenuButton: React.FC<props> = ({handler}) => {
    return (
        <div className={style.main} onClick={handler}>
            <div />
            <div />
            <div />
        </div>
    );
};

export default MenuButton;