
import { TStatus } from "@/app/types/order";
import { baseApi } from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
    endpoints : (builders) => ({
        createOrder : builders.mutation({
            query : (payload) => ({
                url : `/orders/create-order` ,
                method : "POST" ,
                body : payload ,
            }) ,
            invalidatesTags : ["carts" ,'orders'] ,
        }),
        cancelMyOrder : builders.mutation({
            query : (payload) => ({
                url : `/orders/cancel-order/${payload?.id}` ,
                method : "PATCH" ,
                body : payload?.body ,
            }) ,
            invalidatesTags : ['orders'] ,
        }),
        updateOrderStatus : builders.mutation({
            query : (payload : {body : { "status" : TStatus } , id : string}) => ({
                url : `/orders/update-order-status/${payload?.id}` ,
                method : "PATCH" ,
                body : payload?.body ,
            }) ,
            invalidatesTags : ['orders'] ,
        }),
        getAllOrders : builders.query({
            query : () => ({
                url : `/orders` ,
                method : "GET" ,
            }) ,
            providesTags : ['orders'] ,
        }),
        getMyAllOrders : builders.query({
            query : () => ({
                url : `/orders/get-my-orders` ,
                method : "GET" ,
            }) ,
            providesTags : ['orders'] ,
        }),
        getSingleOrder : builders.query({
            query : (id) => ({
                url : `/orders/${id}` ,
                method : "GET" ,
            }) ,
            providesTags : ['orders'] ,
        }),
        getMyHistory : builders.query({
            query : () => ({
                url : `/orders/get-my-history` ,
                method : "GET" ,
            }) ,
            providesTags : ['orders'] ,
        }),
    })
})

export const { 
    useCreateOrderMutation , 
    useGetAllOrdersQuery , 
    useGetMyHistoryQuery ,
    useCancelMyOrderMutation , 
    useGetMyAllOrdersQuery , 
    useGetSingleOrderQuery , 
    useUpdateOrderStatusMutation 
} = orderApi ;
