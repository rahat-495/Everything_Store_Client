
import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
    endpoints : (builders) => ({
        getMyData : builders.query({
            query : () => ({
                url : "/users/getMyData",
                method : "GET" ,
            }),
            providesTags : ['users'] ,
        }),
        updateAddress : builders.mutation({
            query : (payload) => ({
                url : "/users/updateProfile",
                method : "PATCH" ,
                body : payload ,
            }),
            invalidatesTags : ['users'] ,
        }),
    })
})

export const { useGetMyDataQuery , useUpdateAddressMutation } = userApi ;
