/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import cover from "../../../../assets/cover.jpg"
import avatar from "../../../../assets/avatar.jpg"
import { useUser } from '@/context/user.provider';
import { useGetUserPostsQuery } from '@/redux/features/postApi';
import { useGetSingleUserQuery } from '@/redux/features/userApi';
import Image from 'next/image';
import PostCard from '@/components/shared/PostCard';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import CreatePost from '@/components/User/CreatePost';
import { MdOutlinePostAdd } from "react-icons/md";

const UserProfilePage = ({ params }: any) => {
    const { user: currentUser } = useUser()
    console.log(params.id);

    const { data: userData } = useGetSingleUserQuery(params.id)
    const { data: userPost } = useGetUserPostsQuery(params.id)
    const user = userData?.data;

    return (
        <div className="container mx-auto p-6">
            {/* Cover Photo */}
            <div className="bg-gray-200 h-60 mb-6 relative">
                <Image src={cover} width={0} height={0} alt='banner' className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-1/2">
                    <Image src={avatar} width={0} height={0} alt='avater' className="rounded-full border-4 border-white w-24 h-24" />
                </div>
            </div>

            {/* Profile Info */}
            <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
                <h2 className="text-3xl font-bold text-center">{user?.name}</h2>
                <div className="flex justify-center mt-4">
                    <div className="mr-6 text-center">
                        <h3 className="text-xl font-semibold">{userData?.data?.followers.length}</h3>
                        <p className="text-gray-500">Followers</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-xl font-semibold">{userData?.data?.followers.length}</h3>
                        <p className="text-gray-500">Following</p>
                    </div>
                </div>
                <div className="flex justify-center gap-2">
                    <div>
                        {
                            currentUser?._id === user?._id && <Dialog >
                                <DialogTrigger asChild>
                                <Button variant="outline">Add Post</Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-5xl p-0 flex flex-col">
                                    <CreatePost curretUser={currentUser} />
                                </DialogContent>
                            </Dialog>
                        }
                    </div>
                    <div>
                        {
                            currentUser?._id === user?._id && <Dialog >
                                <DialogTrigger asChild>
                                    <Button variant="outline">Add Post</Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-5xl p-0 flex flex-col">
                                    <CreatePost curretUser={currentUser} />
                                </DialogContent>
                            </Dialog>
                        }
                    </div>
                </div>
            </div>

            {/* Posts Section */}
            <div className="bg-white shadow-lg mx-auto rounded-lg p-6 max-w-5xl">
                <h2 className="text-2xl font-bold mb-4">Posts</h2>
                {userPost?.data.map((post: any) => (
                    <div key={post._id} className="mb-4 border-b pb-4">
                        <PostCard post={post} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserProfilePage;