import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {userAPI} from "../services/UserService";
import authSlice from "./reducers/auth/AuthSlice";

const rootReducer = combineReducers({
    [userAPI.reducerPath]: userAPI.reducer,
    authSlice
})
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userAPI.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch