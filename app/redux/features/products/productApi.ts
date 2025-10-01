
import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
    endpoints : (builders) => ({
        getAllProducts : builders.query({
            query : (params) => ({
                url : "/products" ,
                method : "GET" ,
                params ,
            }),
            providesTags : ["products"]
        }) ,
        addProduct: builders.mutation({
            query: (data) => ({
                url: "/products/create-product",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["products"]
        }),
    })
})

export const { useGetAllProductsQuery , useAddProductMutation } = productApi ;
