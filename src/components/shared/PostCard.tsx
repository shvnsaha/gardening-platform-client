import { useUser } from "@/context/user.provider";
import { useAddVoteMutation } from "@/redux/features/postApi";
import Image from "next/image";
import { useState } from "react";
import { BiDownvote, BiUpvote } from "react-icons/bi";
import { FaRegCommentAlt } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PostCard = ({ post }: any) => {
    const { user:currentUser } = useUser()
    const [addVote] = useAddVoteMutation()
   

    const voteCount = post?.upVotes - post?.downVotes;
    const comment = post?.comments.length
    const upvoteIcon = post?.upvotedBy.includes(currentUser?._id)
    const downvoteIcon = post?.downvotedBy.includes(currentUser?._id)
    
      


    const handleVote = async(vote:string)=>{
        const voteData = {
            voteType: vote,
            userId: currentUser?._id
        }
        try {
           const res = await addVote({id:post?._id,voteData}).unwrap()
          
        } catch (error) {
            
        }
    }

   

    return (
        <div>
            <div className="flex items-center gap-3">
                <Image src={post?.author?.profileImg} width={0} height={0} alt='avater' className="rounded-full border-4 border-white w-10 h-10" />
                <p className="text-xs font-semibold">{post?.author?.name}</p>
            </div>
            <p className="text-xs font-semibold">{post?.category}</p>
            <p className="text-xl font-bold">{post?.title}</p>
            <p className="font-light">{post?.content}</p>
            <Image
                src={post?.image}
                alt="Post"
                width={1000}
                height={1000}
                className="rounded-md"
            />

            <div className="flex items-center gap-8">
                <div className="flex items-center gap-2">
                    <BiUpvote onClick={()=>handleVote('upvote')} className={`cursor-pointer ${upvoteIcon ? 'text-blue-700' : ''}`}/>
                    <p>{voteCount}</p>
                    <BiDownvote onClick={()=>handleVote('downvote')} className={`cursor-pointer ${downvoteIcon ? 'text-blue-700' : ''}`} />
                </div>
                <div className="flex items-center gap-2">
                    <FaRegCommentAlt />
                    <p>{comment}</p>
                </div>

                <div className="flex items-center gap-2">
                    <RiShareForwardLine />
                    <p>share</p>
                </div>
            </div>

        </div>
    );
};

export default PostCard;