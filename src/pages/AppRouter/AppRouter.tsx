import React from 'react';
import style from './AppRouter.module.css';
import {Routes, Route} from 'react-router-dom';
import LoginPage from "../../pages/LoginPage/LoginPage";
import RegistrationPage from "../../pages/RegistrationPage/RegistrationPage";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import ActivatePage from "../../pages/ActivatePage/ActivatePage";
import GroupsPage from "../GroupsPage/GroupsPage";
import Aside from "../../components/Aside/Aside";
import LoaderSpinner from "../../components/UI/LoaderSpinner/LoaderSpinner";
import ProfilePage from "../ProfilePage/ProfilePage";
import CreateGroupPage from "../CreateGroupPage/CreateGroupPage";
import Header from "../../components/Header/Header";

const AppRouter = () => {
    const {isAuth, isLoading, user} = useTypedSelector((state) => state.auth);

    if (isLoading) {
        return <LoaderSpinner size={80}/>;
    }

    return (
        isAuth
            ?
            user.isActivated
                ?
                <>
                    <Header />
                    <Aside />
                    <div className={style.container}>
                        <Routes>
                            <Route path='/profile' element={<ProfilePage/>}/>
                            <Route path='/create-group' element={<CreateGroupPage/>}/>
                            <Route path='/groups' element={<GroupsPage/>} />
                            <Route path={'*'} element={<ProfilePage/>} />
                        </Routes>
                    </div>
                </>
                : <ActivatePage />
            :
            <Routes>
                <Route path='/login' element={<LoginPage/>} />
                <Route path='/registration' element={<RegistrationPage/>} />
                <Route path={'*'} element={<LoginPage/>}/>
            </Routes>
    );
};

export default AppRouter;