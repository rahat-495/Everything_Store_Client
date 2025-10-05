
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
        updateProduct: builders.mutation({
            query: (data) => ({
                url: `/products/update-product/${data?.id}`,
                method: "PATCH",
                body: data?.payload, 
            }),
            invalidatesTags: ["products"]
        }),
        deleteProduct: builders.mutation({
            query: ({id}) => ({
                url: `/products/${id}`,
                method: "DELETE", 
            }),
            invalidatesTags: ["products"]
        }),
    })
})

export const { useGetAllProductsQuery , useAddProductMutation , useUpdateProductMutation , useDeleteProductMutation } = productApi ;
