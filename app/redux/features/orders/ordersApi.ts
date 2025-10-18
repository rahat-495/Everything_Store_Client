
import { baseApi } from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
    endpoints : (builders) => ({
        createOrder : builders.mutation({
            query : (payload) => ({
                url : `/orders/create-order` ,
                method : "POST" ,
                body : payload ,
            }) ,
            invalidatesTags : ['orders'] ,
        }),
    })
})

export const { useCreateOrderMutation } = orderApi ;
