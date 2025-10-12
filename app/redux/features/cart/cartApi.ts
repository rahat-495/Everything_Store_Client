
import { baseApi } from "../../api/baseApi";

const cartApi = baseApi.injectEndpoints({
    endpoints : (builders) => ({
        addToCart : builders.mutation({
            query : (payload) => ({
                url : "/carts/add-to-cart" ,
                method : "POST" ,
                body : payload ,
            }),
            invalidatesTags : ["carts"] ,
        }),
        updateCart : builders.mutation({
            query : (payload) => ({
                url : `/carts/update/add-to-cart/${payload?.id}` ,
                method : "PATCH" ,  
                body : payload?.body ,
            }),
            invalidatesTags : ["carts"] ,
        }),
        deleteCart : builders.mutation({
            query : (params) => ({
                url : `/carts/${params?.id}` ,
                method : "DELETE" ,  
            }),
            invalidatesTags : ["carts"] ,
        }),
        getMyAllCart : builders.query({
            query : () => ({
                url : "/carts" ,
                method : "GET" ,
            }),
            providesTags : ["carts"] ,
        }),
    })
})

export const { useAddToCartMutation , useGetMyAllCartQuery , useUpdateCartMutation , useDeleteCartMutation } = cartApi ;
