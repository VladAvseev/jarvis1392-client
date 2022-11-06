import React from 'react';
import style from './ProfilePage.module.css';
import ProfileInfo from "../../components/Profile/ProfileInfo/ProfileInfo";
import ProfileGroupsList from "../../components/Profile/ProfileGroupsList/ProfileGroupsList";

const ProfilePage: React.FC = () => {
    return (
        <div className={style.page}>
            <ProfileInfo />
            <ProfileGroupsList />
        </div>
    );
};

export default ProfilePage;