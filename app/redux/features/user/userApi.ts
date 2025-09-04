
import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
    endpoints : (builders) => ({
        getMyData : builders.query({
            query : () => ({
                url : "/user/getMyData",
                method : "GET" ,
            })
        })
    })
})

export const { useGetMyDataQuery } = userApi ;
