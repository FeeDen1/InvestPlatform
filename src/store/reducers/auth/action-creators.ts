import {createAction, createAsyncThunk, isRejected} from "@reduxjs/toolkit";
import axios from "axios";
import {userAPI} from "../../../services/UserService";
import {IUser} from "../../../models/IUser";
import {AuthState} from "./types";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

export const checkLogin = createAsyncThunk(
    'user/checkLogin',
    async ({username, password}: { username: string; password: string }, thunkAPI) => {

        // Отправляем запрос на сервер для проверки логина
        const response = await axios.get<IUser[]>('http://localhost:5000/users')

        const user = response.data.find(user => user.username === username && user.password === password)
        if (user) {
            return user
        }
        // Разобраться, что будет если ввести неправильные данные
    })