import React from "react";
import {Route} from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import LoginRecover from "../pages/LoginRecover";
import MainPage from "../pages/MainPage";


export interface IRoute {
    path: string;
    component: React.ComponentType;
    exact ?: boolean;
}


export enum RouteNames {
    MAIN_PAGE ='/',
    LOGIN = '/login',
    REGISTER='/register',
    RECOVER_LOGIN='/login/recover'
}

export const publicRoutes:IRoute[] = [
    {path: RouteNames.LOGIN, exact:true, component: Login},
    {path: RouteNames.REGISTER, exact:true, component: Register},
    {path: RouteNames.RECOVER_LOGIN, exact:true, component: LoginRecover},
    {path: RouteNames.MAIN_PAGE, exact:true, component: MainPage}
]

export const privateRoutes:IRoute[] = [
    {path: RouteNames.RECOVER_LOGIN, exact:true, component: MainPage}

]