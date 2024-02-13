import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../../models/IUser";
import {AuthState} from "./types";
import {checkLogin} from "./action-creators";
import {userAPI} from "../../../services/UserService";

const initialState:AuthState = {
    isAuth: false,
    user: {} as IUser,
    error: '',
    isLoading: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout(state) {
            localStorage.removeItem('auth')
            localStorage.removeItem('username')
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
                state.error = ''
                state.user = action.payload
            } else {
                state.error = 'Такого пользователя нет!'
            }
            state.isLoading = false
        })
        builder.addCase(checkLogin.rejected, (state, action) => {
            state.error = 'Проверьте правильность введенных данных'
            state.isLoading = false
        })
    }

})


export default authSlice.reducer;