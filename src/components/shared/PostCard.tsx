import Image from "next/image";
import avatar from "../../assets/avatar.jpg"
import postImage from "../../assets/meeting.jpg"
import { BiDownvote, BiUpvote } from "react-icons/bi";
import { FaRegCommentAlt } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";

const PostCard = ({post}) => {
  
    return (
        <div>
            <div className="flex items-center gap-3">
                <Image src={avatar} width={0} height={0} alt='avater' className="rounded-full border-4 border-white w-10 h-10" />
                <p className="text-xs font-semibold">User name</p>
            </div>
            <p className="text-xs font-semibold">category</p>
            <p className="text-xl font-bold">Post Title</p>
            <p className="font-light">post content</p>
            <Image
                src={postImage}
                alt="Post"
                width={1000}
                height={1000}
                className="rounded-md"
            />

            <div className="flex items-center gap-8">
                <div className="flex items-center gap-2">
                    <BiUpvote className="cursor-pointer"/>
                    <p>50</p>
                    <BiDownvote className="cursor-pointer"/>
                </div>
                <div className="flex items-center gap-2">
                <FaRegCommentAlt />
                 <p>3</p>
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