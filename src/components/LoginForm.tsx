import React, {FC, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {useForm, SubmitHandler} from "react-hook-form"
import {UserIcon} from "../UI/svg/UserIcon";
import authSlice from "../store/reducers/auth/AuthSlice";
import login from "../pages/Login";
import {checkLogin} from "../store/reducers/auth/action-creators";
import Input from "../UI/Input";

interface LoginFormInput {
    username: string;
    password: string;
}

const LoginForm: FC = () => {
    const dispatch = useAppDispatch()
    const {error, isLoading} = useAppSelector(state => state.auth)
    const {
        register,
        formState: {errors},
        handleSubmit
    } = useForm<LoginFormInput>()
    const onSubmit: SubmitHandler<LoginFormInput> = (data) => {
        dispatch(checkLogin({username: data.username, password: data.password}))
    }



    return (
        <div className='relative top-[130px] mx-auto flex flex-col items-center w-fit '>
            <UserIcon className='h-[150px] w-[150px] stroke-blue-300 max-md:h-12 max-md:w-12'/>
            <h1 className='text-5xl mb-10'>
                Войти в аккаунт!
            </h1>
            <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                <Input
                    label='username'
                    register={register}
                    required={true}
                    classNameLabel='label'
                    InputClassName='input-form'
                    key='username'
                />
                {errors.username?.type === "required" && (
                    <p className='text-red-500' role="alert">Введите имя пользователя!</p>
                )}
                <Input
                    type='password'
                    label='password'
                    register={register}
                    required={true}
                    classNameLabel='label'
                    InputClassName='input-form'
                    key='Password'
                />
                <div className={errors.password?.type === "required" || error ? 'flex flex-row justify-between' : 'flex flex-row justify-end'}>
                    {errors.password?.type === "required"
                        ?
                        <p className='text-red-500' role="alert">Введите пароль!</p>
                        :
                        <h2 className='text-red-300'>{error}</h2>
                        }


                    <button onClick={handleSubmit(onSubmit)}
                            className='border bg-blue-200 w-[110px] h-[40px] self-end text-xl rounded-md mt-3' type='submit'>
                        Войти
                    </button>
                </div>

            </form>
        </div>


    );
};

export default LoginForm;