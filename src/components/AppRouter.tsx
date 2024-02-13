import React, {FC} from 'react';
import {useAppSelector} from "../hooks/redux";
import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../routes/routes";

const AppRouter:FC = () => {
    const isAuth = useAppSelector(state => state.authSlice.isAuth)
    return (
        isAuth ?
        <Routes>
            {privateRoutes.map((route) => (
                <Route
                    path={route.path}
                    element={<route.component/>}
                    key={route.path}
                />
            ))}
        </Routes>
            :
            <Routes>
                {publicRoutes.map((route) => (
                    <Route path={route.path}
                           element={<route.component/>}
                           key={route.path}/>))}
                <Route path="*"
                       element={<Navigate to='/' replace/>}/>
            </Routes>
    );
};

export default AppRouter;