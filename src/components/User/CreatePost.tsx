/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAddPostMutation } from "@/redux/features/postApi";
import { imageUpload } from "@/services/utils";
import { useState } from "react";
import toast from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
const CreatePost = ({ curretUser}:any) => {

    const [addpost] = useAddPostMutation()
    const [loading, setLoading] = useState(false)

    const [uploadButtonText, setUploadButtonText] = useState('Upload Image')

    const handleImageChange = (image: File) => {
        setUploadButtonText(image.name)
    }
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const content = form.content.value;
        const category = form.category.value;
        const image = form.image.files[0];
        const image_url = await imageUpload(image)


        const postData = {
            title, content, image: image_url?.data?.display_url, author: curretUser?._id, category
        }

        console.log(postData);

        try {
            setLoading(true)
            const res = await addpost(postData).unwrap()
            if (res?.success) {
                toast.success(res.message)
            }

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }


    }

    return (
        <div className="p-10">
            <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <input
                            className="w-full px-4 py-3 text-gray-800 border border-black-300 focus:outline-blue-500  rounded-md "
                            name="title"
                            id="title"
                            type="text"
                            placeholder="Title"
                            required
                        />
                    </div>

                    <div className='space-y-1 text-sm'>
                        <label htmlFor='description' className='block text-gray-600'>
                            Content
                        </label>

                        <textarea
                            id='content'
                            className='block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-rose-300 focus:outline-rose-500 '
                            name='content'
                            placeholder="Content"
                        ></textarea>
                    </div>



                    <div className="space-y-1 text-sm">
                        <input
                            className="w-full px-4 py-3 text-gray-800 border border-black-300 focus:outline-blue-500  rounded-md "
                            name="category"
                            id="category"
                            type="text"
                            placeholder="Category"
                            required
                        />
                    </div>


                    <div className=" p-4 bg-white w-full  m-auto rounded-lg">
                        <div className="file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg">
                            <div className="flex flex-col w-max mx-auto text-center">
                                <label>
                                    <input onChange={(e: any) => handleImageChange(e.target.files[0])}
                                        className="text-sm cursor-pointer w-36 hidden"
                                        type="file"
                                        name="image"
                                        id="image"
                                        accept="image/*"
                                        hidden
                                    />
                                    <div className="bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500">
                                        {uploadButtonText}
                                    </div>
                                </label>
                            </div>
                        </div>
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
    );
};

export default CreatePost;