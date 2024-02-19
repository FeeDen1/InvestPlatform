import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IUser} from "../models/IUser";

export const userAPI = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000'}),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        fetchAllUsers: builder.query<IUser[], string>({
            query: () => ({
                url: '/users'
            }),

        }),
        addANewUser: builder.mutation<IUser, IUser>({
            query: (user) => ({
                url: '/users',
                method: 'POST',
                body: user
            }),

        })
    })
})