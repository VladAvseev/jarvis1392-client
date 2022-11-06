import React from 'react';
import style from './ButtonWhite.module.css';

interface props {
    text: string;
    width?: number;
    height?: number
    handler?: () => void;
}

const ButtonWhite = ({text, width, height, handler}: props) => {
    return (
        <button
            onClick={handler}
            className={style.button}
            style={{
                width: width ? `${width}px` : '',
                height: height ? `${height}px` : ''
        }}
        >
            {text}
        </button>
    );
};

export default ButtonWhite;