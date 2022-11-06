import React from 'react';
import style from './ErrorMessage.module.css';

interface props {
    text: string;
}

const ErrorMessage: React.FC<props> = ({text}) => {
    return (
        <div className={style.error}>
            {text}
        </div>
    );
};

export default ErrorMessage;