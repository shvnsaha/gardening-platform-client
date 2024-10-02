import { baseApi } from "../api/baseApi";


const postApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getPosts: builder.query({
            query: (params) => ({
                method: 'GET',
                url: `/posts?${params}`,
              }),
              providesTags:['post']
        }),
       
        getUserPosts: builder.query({
            query: (params) => ({
                method: 'GET',
                url: `/post/user/${params}`,
              }),
              providesTags:['post']
        }),
       
          addPost: builder.mutation({
            query: (payload) => ({
              url: "/post",
              method: "POST",
              body: payload,
            }),
            invalidatesTags:['post']
          }),

          addVote: builder.mutation({
            query: (payload) => ({
              url: `/post/vote/${payload.id}`,
              method: "POST",
              body: payload.voteData,
            }),
            invalidatesTags:['post']
          }),
        })
    })


    export const {useAddPostMutation,useGetPostsQuery,useGetUserPostsQuery,useAddVoteMutation} = postApi
