"use client"

import banner from "../../../assets/meeting.jpg"
import avatar from "../../../assets/avatar.jpg"
import Image from 'next/image';
import PostCard from '@/components/shared/PostCard';
import CreatePost from '@/components/User/CreatePost';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useGetPostsQuery } from "@/redux/features/postApi";
import { useUser } from "@/context/user.provider";
import { useGetSingleUserQuery } from "@/redux/features/userApi";


const MyProfilePage = () => {
  

  const {user} = useUser() 
  
  const {data,isLoading} = useGetSingleUserQuery(user?._id)

  console.log(data);

  // const {data,isLoading} = useGetPostsQuery(undefined)

  // const user = {
  //   name: 'John Doe',
  //   bio: 'Gardening enthusiast 🌱 | Food lover 🍕 | Nature explorer 🌍',
  //   followers: 120,
  //   following: 180,
  //   posts: [
  //     {
  //       id: 1,
  //       content: 'Just planted some new herbs! 🌿',
  //       image: 'https://via.placeholder.com/300',
  //     },
  //     {
  //       id: 2,
  //       content: 'Check out my vegetable garden! 🥕🌽',
  //       image: 'https://via.placeholder.com/300',
  //     },
  //     {
  //       id: 3,
  //       content: 'Enjoying a sunny day in the garden! ☀️',
  //       image: 'https://via.placeholder.com/300',
  //     },
  //   ],
  // };

  return (
    <div className="container mx-auto p-6">
      {/* Cover Photo */}
      <div className="bg-gray-200 h-40 mb-6 relative">
        <Image src={banner} width={0} height={0} alt='banner' className="w-full h-full object-cover" />
        <div className="absolute bottom-0 left-4">
          {/* <img 
            src="https://via.placeholder.com/100" 
            alt="Profile" 
            className="rounded-full border-4 border-white w-24 h-24"
          /> */}
          <Image src={avatar} width={0} height={0} alt='avater' className="rounded-full border-4 border-white w-24 h-24" />
        </div>
      </div>

      {/* Profile Info */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-3xl font-bold text-center">{user?.name}</h2>
        <p className="text-gray-600 text-center">{user.bio}</p>
        <div className="flex justify-center mt-4">
          <div className="mr-6 text-center">
            <h3 className="text-xl font-semibold">{user.followers}</h3>
            <p className="text-gray-500">Followers</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold">{user.following}</h3>
            <p className="text-gray-500">Following</p>
          </div>
          {/* <Dialog >
            <DialogTrigger asChild>
              <Button variant="outline">Share</Button>
            </DialogTrigger>
            <DialogContent className="max-w-5xl p-0 flex flex-col">
             <CreatePost/>
            </DialogContent>
          </Dialog> */}
        </div>
      </div>

      {/* Posts Section */}
      <div className="bg-white shadow-lg mx-auto rounded-lg p-6 max-w-5xl">
        <h2 className="text-2xl font-bold mb-4">Posts</h2>
        {user.posts.map(post => (
          <div key={post.id} className="mb-4 border-b pb-4">
            <PostCard />
          </div>
        ))}
      </div>
    </div>
    <p>hello</p>
  );
};

export default MyProfilePage;
