import React from 'react';
import style from './ButtonBlue.module.css';

interface props {
    handler?: () => void;
    text: string;
    width?: number;
    height?: number
}

const ButtonBlue: React.FC<props> = ({text, width, height, handler}) => {
    return (
        <button
            className={style.button}
            style={{
                width: width ? `${width}px` : '',
                height: height ? `${height}px` : ''
            }}
            onClick={handler}
        >
            {text}
        </button>
    );
};

export default ButtonBlue;