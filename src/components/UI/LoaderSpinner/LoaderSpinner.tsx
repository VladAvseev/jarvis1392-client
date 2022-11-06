import React from 'react';
import style from './LoaderSpinner.module.css'

interface props {
    size: number
}

const LoaderSpinner: React.FC<props> = ({size}) => {
    return (
        <div className={style.ldsSpinner} style={{width: `${size}px`, height: `${size}px`}}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default LoaderSpinner;