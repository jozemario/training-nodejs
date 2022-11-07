import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface IUpdatePassword {
    newPassword: string;
    oldPassword: string;
    userId: number | string;
}
export interface IUpdateNameAndPasswordByEmail {
    newPassword: string;
    oldPassword: string;
    email: string;
    name: string;
    token: string;
}

export interface IUpdateUser {
    name: string;
    email: string;
    image: any;
    userId: number | string;
}
export interface IUpdateUserImage {
    formData: FormData;
    userId: number | string;
}
export interface ISendEmailToResetPassword {
    email: string;
}
export interface ISetNewPassword {
    resetPasswordToken: string;
    password: string;
}
export interface IDeleteUserImage {
    userId: number;
}

export const salesApi = createApi({
    reducerPath: 'salesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.NEXT_PUBLIC_API_URL}`,
    }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        getUserProfile: builder.query<any, Partial<number | string>>({
            query: (userId: number) => ({
                url: `users/${userId}`,
                method: 'GET',
            }),
            transformResponse: (response: any) => response.data,
            providesTags: ['User'],
        }),
        updateUserPassword: builder.mutation<any, Partial<IUpdatePassword>>({
            query: ({ newPassword, oldPassword, userId }: IUpdatePassword) => ({
                url: `/users/${userId}/password`,
                method: 'PUT',
                body: { newPassword, oldPassword },
            }),
            transformResponse: (response: any) => response.data,
            invalidatesTags: ['User'],
        }),
        updateUserPasswordAndNameByEmail: builder.mutation<
            any,
            Partial<IUpdateNameAndPasswordByEmail>
        >({
            query: ({
                newPassword,
                oldPassword,
                email,
                token,
                name,
            }: IUpdateNameAndPasswordByEmail) => ({
                url: `/users/email/${email}/${token}/password`,
                method: 'PUT',
                body: { newPassword, oldPassword, name },
            }),
            transformResponse: (response: any) => response.data,
            invalidatesTags: ['User'],
        }),
        updateUser: builder.mutation<any, Partial<IUpdateUser>>({
            query: ({ name, email, image, userId }: IUpdateUser) => ({
                url: `/users/${userId}`,
                method: 'PUT',
                body: { name, email, image },
            }),
            transformResponse: (response: any) => response.data,
            invalidatesTags: ['User'],
        }),
        updateUserImage: builder.mutation<any, Partial<IUpdateUserImage>>({
            query: ({ formData, userId }: IUpdateUserImage) => ({
                url: `/users/${userId}/image`,
                method: 'POST',
                body: formData,
            }),
            transformResponse: (response: any) => response.data,
            invalidatesTags: ['User'],
        }),
        deleteUserImage: builder.mutation<any, Partial<IDeleteUserImage>>({
            query: ({ userId }: IDeleteUserImage) => ({
                url: `/users/${userId}/image`,
                method: 'DELETE',
            }),
            transformResponse: (response: any) => response.data,
            invalidatesTags: ['User'],
        }),
        sendEmailToResetPassword: builder.mutation<
            any,
            Partial<ISendEmailToResetPassword>
        >({
            query: ({ email }: ISendEmailToResetPassword) => ({
                url: `/auth/forget-password`,
                method: 'POST',
                body: { email },
            }),
        }),
        setNewPassword: builder.mutation<any, Partial<ISetNewPassword>>({
            query: ({ resetPasswordToken, password }: ISetNewPassword) => ({
                url: `/auth/reset-password/${resetPasswordToken}`,
                method: 'PUT',
                body: { password },
            }),
            transformResponse: (response: any) => response.data,
            invalidatesTags: ['User'],
        }),
    }),
});

export const {
    useGetUserProfileQuery,
    useUpdateUserPasswordMutation,
    useUpdateUserPasswordAndNameByEmailMutation,
    useUpdateUserMutation,
    useUpdateUserImageMutation,
    useDeleteUserImageMutation,
    useSendEmailToResetPasswordMutation,
    useSetNewPasswordMutation,
} = salesApi;
