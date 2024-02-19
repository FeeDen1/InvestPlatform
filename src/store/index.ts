import {combineReducers, configureStore, Middleware, Store} from "@reduxjs/toolkit";
import {userAPI} from "../services/UserService";
import authSlice, {authTransform} from "./reducers/auth/AuthSlice";
import {persistStore, persistReducer, createTransform, createMigrate} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from "redux-persist/es/constants";
import {PersistConfig} from "redux-persist/es/types";
import {
    BaseQueryFn,
    CombinedState,
    FetchArgs,
    FetchBaseQueryError, FetchBaseQueryMeta,
    MutationDefinition,
    QueryDefinition
} from "@reduxjs/toolkit/query";
import {IUser} from "../models/IUser";


const persistConfig: PersistConfig<any> = {
    key: 'root',
    storage,
    blacklist: [userAPI.reducerPath],
    transforms: [authTransform],

}


const rootReducer = combineReducers({
    [userAPI.reducerPath]: userAPI.reducer as unknown as CombinedState<{
        fetchAllUsers: QueryDefinition<string, BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, "User", IUser[], "userApi">;
        addANewUser: any;
    }, "User", "userApi">, //Это всё фикс ошибки TS2345 в RootReducer. Вроде все работает как надо
    auth: authSlice,
})


const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER // Игнорируем все действия связанные с userAPI
                ],
            },
        }).concat(userAPI.middleware as Middleware),
})


export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch