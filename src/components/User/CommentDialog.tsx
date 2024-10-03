import { useUser } from "@/context/user.provider";
import { useAddCommentMutation, useGetCommentsQuery } from "@/redux/features/commentApi";
import { useState } from "react";
import { TbFidgetSpinner } from "react-icons/tb";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";


const CommentDialog = ({ postData }: any) => {

    const [loading, setLoading] = useState(false)
    const { user } = useUser()
    const [addComment] = useAddCommentMutation()
    const { data, isLoading } = useGetCommentsQuery({ id: postData._id })
    console.log(data);

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        e.preventDefault();
        const form = e.target;
        const text = form.text.value;
        const commentData = {
            text,
            author: user?._id,
            post: postData._id
        }

        console.log(commentData);

        try {
            const res = await addComment(commentData).unwrap()
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div>
            <div>
                {
                    data?.data.map((item:any) => (<div className='my-2'>
                        <div className='flex gap-3 items-center'>
                            <Avatar>
                                <AvatarImage src={item?.author?.profileImg} />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <h1 className='font-bold text-sm'>{item?.author.name} <span className='font-normal pl-1'>{item?.text}</span></h1>
                        </div>
                    </div>))
                }
            </div>

            <div className="p-10">
                <form onSubmit={handleSubmit}>
                    <div className="space-y-6">
                        <div className="space-y-1 text-sm">
                            <input
                                className="w-full px-4 py-3 text-gray-800 border border-black-300 focus:outline-blue-500  rounded-md "
                                name="text"
                                id="text"
                                type="text"
                                placeholder="Comment"
                                required
                            />
                        </div>


                    </div>

                    <button
                        type="submit"
                        className="w-full p-3 mt-5 text-center font-medium text-black transition duration-200 rounded shadow-md bg-accent"
                    >
                        {loading ? (
                            <TbFidgetSpinner
                                className="m-auto animate-spin"
                                size={24}
                            />
                        ) : (
                            "Save & Continue"
                        )}


                    </button>
                </form>
            </div>

        </div>
    );
};

export default CommentDialog;