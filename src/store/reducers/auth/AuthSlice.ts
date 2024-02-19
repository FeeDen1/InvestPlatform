import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../../models/IUser";
import {AuthState} from "./types";
import {checkLogin} from "./action-creators";
import {userAPI} from "../../../services/UserService";
import {createTransform} from "redux-persist";
import {Transform} from "redux-persist/es/types";

const initialState:AuthState = {
    isAuth: false,
    user: {} as IUser,
    error: '',
    isLoading: false,
}

export const authTransform: Transform<AuthState, Omit<AuthState, 'error'>, any> = createTransform(
    (state) => {
        const { error, ...rest } = state as AuthState;
        return rest;
    },
    (state) => {
        return { ...state, error: '' };
    },
    { whitelist: ['auth'] }
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout(state) {
            localStorage.removeItem('username')
            localStorage.removeItem('auth')
            state.isAuth = false;
            state.user = {} as IUser;
        },

    },
    extraReducers: (builder) => {
        builder.addCase(checkLogin.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(checkLogin.fulfilled,(state,action) => {
            if(action.payload) {
                state.isAuth = true
                state.user = action.payload
                localStorage.setItem('auth', 'true')
                localStorage.setItem('username',state.user.username)
                state.error = ''


            } else {
                state.error='ПППУПУПУ'
                console.log(state.error)
            }
            state.isLoading = false
        })
        builder.addCase(checkLogin.rejected, (state, action) => {
            state.error = 'Проверьте правильность введенных данных'

            state.isLoading = false
        })

    }

})


export const { logout } = authSlice.actions;
export default authSlice.reducer;
