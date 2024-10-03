import { baseApi } from "../api/baseApi";

const commentApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addComment: builder.mutation({
            query: (commentData) => ({
                url: `/comment`,
                method: "POST",
                body: commentData,
            }),
            invalidatesTags: ['comment']
        }),
        getComments: builder.query({
            query: (params) => ({
                method: 'GET',
                url: `/comment/${params.id}`,
            }),
            providesTags: ['comment']
        }),

    })
})


export const { useAddCommentMutation, useGetCommentsQuery } = commentApi
