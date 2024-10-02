import { baseApi } from "../api/baseApi";


const userApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getSingleUser: builder.query({
            query: (params) => ({
                method: 'GET',
                url: `/user/${params}`,
              }),
              providesTags:['user']
        }),
       
        
    })

})


    export const {useGetSingleUserQuery} = userApi
