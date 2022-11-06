import React, {useEffect} from 'react';
import './App.css';
import {useActions} from "./hooks/useActions";
import AppRouter from "./pages/AppRouter/AppRouter";

const App: React.FC = () => {
    const {checkAuth} = useActions();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            checkAuth();
        }
    }, [])

    return (
        <AppRouter/>
    );
};

export default App;