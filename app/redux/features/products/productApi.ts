
import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
    endpoints : (builders) => ({
        getAllProducts : builders.query({
            query : (params) => ({
                url : "/products" ,
                method : "GET" ,
                params ,
            })
        }) ,
    })
})

export const { useGetAllProductsQuery } = productApi ;
