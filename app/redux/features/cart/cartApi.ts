
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
        getMyAllCart : builders.query({
            query : () => ({
                url : "/carts" ,
                method : "GET" ,
            }),
            providesTags : ["carts"] ,
        }),
    })
})

export const { useAddToCartMutation , useGetMyAllCartQuery } = cartApi ;
