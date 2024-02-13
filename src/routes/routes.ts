import React from "react";
import {Route} from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import LoginRecover from "../pages/LoginRecover";


export interface IRoute {
    path: string;
    component: React.ComponentType;
    exact ?: boolean;
}


export enum RouteNames {
    LOGIN = '/login',
    REGISTER='/register',
    RECOVER_LOGIN='/login/recover'
}

export const publicRoutes:IRoute[] = [
    {path: RouteNames.LOGIN, exact:true, component: Login},
    {path: RouteNames.REGISTER, exact:true, component: Register},
    {path: RouteNames.RECOVER_LOGIN, exact:true, component: LoginRecover},
]

export const privateRoutes:IRoute[] = [

]