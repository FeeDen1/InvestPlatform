import {combineReducers, configureStore, Store} from "@reduxjs/toolkit";
import {userAPI} from "../services/UserService";
import authSlice from "./reducers/auth/AuthSlice";
import {persistStore, persistReducer, createTransform, createMigrate} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from "redux-persist/es/constants";


;




const persistConfig = {
    key: 'root',
    storage,
    blacklist: [userAPI.reducerPath],

}


const rootReducer = combineReducers({
    [userAPI.reducerPath]: userAPI.reducer,
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
        }).concat(userAPI.middleware),
})


export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch