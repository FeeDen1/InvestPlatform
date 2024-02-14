import React, {FC, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import { useForm, SubmitHandler } from "react-hook-form"

interface LoginFormInput {
    username: string;
    password: string;
}
const LoginForm:FC = () => {
    const dispatch = useAppDispatch()
    const {error, isLoading} = useAppSelector(state => state.authSlice)
    const { register, handleSubmit } = useForm<LoginFormInput>()
    const onSubmit: SubmitHandler<LoginFormInput> = (data) => console.log(data)

    return (

            <form className='' onSubmit={handleSubmit(onSubmit)}>
                <label>Username</label>
                <input {...register("username")} />
                <label>Password</label>
                <input {...register("password")} />
                <input type="submit" />
            </form>

    );
};

export default LoginForm;