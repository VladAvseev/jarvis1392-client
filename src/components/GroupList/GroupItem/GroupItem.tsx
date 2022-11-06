import React from 'react';
import style from './GroupItem.module.css';
import image from '../../../assets/images/group-ava.jpg'

interface Props {
    name: string,
    owner: string
}

const GroupItem: React.FC<Props> = ({name, owner}) => {
    return (
        <div className={style.main}>
            <div className={style.img__wrapper}>
                <img className={style.img} src={image} alt="img"/>
            </div>
            <div className={style.content}>
                <h3 className={style.name}>{name}</h3>
                <h4>owner: {owner}</h4>
            </div>
        </div>
    );
};

export default GroupItem;