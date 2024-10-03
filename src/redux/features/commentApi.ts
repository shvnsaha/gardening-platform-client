import { baseApi } from "../api/baseApi";


const commentApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
          addComment: builder.mutation({
            query: (commentData) => ({
              url: `/comment`,
              method: "POST",
              body: commentData,
            }),
            invalidatesTags:['comment']
          }),
        })
    })


    export const {useAddCommentMutation} = commentApi
