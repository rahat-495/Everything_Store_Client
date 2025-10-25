
import { baseApi } from "../../api/baseApi";

const reviewApi = baseApi.injectEndpoints({
    endpoints : (builders) => ({
        createReview : builders?.mutation({
            query : (body) => ({
                url : '/reviews/create-review' ,
                method : "POST" ,
                body ,
            }),
            invalidatesTags : ['reviews'] ,
        }) ,
        getMyAllReviews : builders?.query({
            query : () => ({
                url : '/reviews/get-my-reviews' ,
                method : "GET" ,
            }),
            providesTags : ['reviews'] ,
        }) ,
        getMySingleReview : builders?.query({
            query : (id) => ({
                url : `/reviews/get-my-review/${id}` ,
                method : "GET" ,
            }),
            providesTags : ['reviews'] ,
        }) ,
        getOrderReview : builders?.query({
            query : (id) => ({
                url : `/reviews/get-order-review/${id}` ,
                method : "GET" ,
            }),
            providesTags : ['reviews'] ,
        }) ,
        updateReview : builders?.mutation({
            query : (payload) => ({
                url : `/reviews/update-my-review/${payload?.id}` ,
                method : "PATCH" ,
                body : payload?.body ,
            }),
            invalidatesTags : ['reviews'] ,
        }) ,
        getAllReviews : builders?.query({
            query : () => ({
                url : `/reviews/get-all-reviews` ,
                method : "GET" ,
            }),
            providesTags : ['reviews'] ,
        }) ,
    })
})

export const { 
    useCreateReviewMutation ,
    useGetAllReviewsQuery ,
    useGetMyAllReviewsQuery ,
    useGetOrderReviewQuery ,
    useUpdateReviewMutation ,
    useGetMySingleReviewQuery ,
    
} = reviewApi ;
