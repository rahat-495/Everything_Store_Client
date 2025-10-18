
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
        cancelMyOrder : builders.mutation({
            query : (payload) => ({
                url : `/orders/cancel-order/${payload?.id}` ,
                method : "PATCH" ,
                body : payload?.body ,
            }) ,
            invalidatesTags : ['orders'] ,
        }),
        updateOrderStatus : builders.mutation({
            query : (payload : {body : { "status" : "Processing" } , id : string}) => ({
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
        getMySingleOrder : builders.query({
            query : (id) => ({
                url : `/orders/get-my-order/${id}` ,
                method : "GET" ,
            }) ,
            providesTags : ['orders'] ,
        }),
    })
})

export const { 
    useCreateOrderMutation , 
    useGetAllOrdersQuery , 
    useCancelMyOrderMutation , 
    useGetMyAllOrdersQuery , 
    useGetMySingleOrderQuery , 
    useUpdateOrderStatusMutation 
} = orderApi ;
