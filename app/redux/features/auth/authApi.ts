
import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints : (builder) => ({
        login : builder.mutation({
            query : (payload) => ({
                url : "/auth/login",
                method : "POST" ,
                body : payload ,
            })
        }),
        signup : builder.mutation({
            query : (payload) => ({
                url : "/auth/register",
                method : "POST" ,
                body : payload ,
            })
        }),
        logout : builder.mutation({
            query : () => ({
                url : "/auth/logout",
                method : "POST" ,
            })
        }),
        updatePass : builder.mutation({
            query : (payload) => ({
                url : "/auth/updatePassword",
                method : "POST" ,
                body : payload ,
            })
        }),
    })
});

export const { useLoginMutation , useSignupMutation , useLogoutMutation , useUpdatePassMutation } = authApi ;
