/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useSignupMutation } from "@/redux/features/authApi";
import { imageUpload } from "@/services/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";

const Signup = () => {
    const [signup] = useSignupMutation()
    const router = useRouter();
    const [loader, setLoader] = useState(false);
    const [uploadButtonText, setUploadButtonText] = useState('Upload Image')

    const handleImageChange = (image: File) => {
        setUploadButtonText(image.name)
    }

    const handleSignUp = async (e: any) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const image = form.image.files[0];
        const image_url = await imageUpload(image)

        const userData = {
            name, email, password, role: "user", profileImg: image_url?.data?.display_url
        }

        try {
            setLoader(true)
            const response = await signup(userData).unwrap();
            console.log(response);
            if (response.success) {
                toast.success(response.message)
                router.push('/login')
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoader(false)
        }
    }

    return (
        <>

            <div className="flex justify-center items-center min-h-screen">
                <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
                    <div className="mb-8 text-center">
                        <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
                    </div>
                    <form
                        onSubmit={handleSignUp}
                        className="space-y-6 ng-untouched ng-pristine ng-valid"
                    >
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Enter Your Name Here"
                                    className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-blue-500 bg-gray-200 text-gray-900"
                                    data-temp-mail-org="0"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    placeholder="Enter Your Email Here"
                                    className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-blue-500 bg-gray-200 text-gray-900"
                                    data-temp-mail-org="0"
                                />
                            </div>

                            <div>
                                <div className="flex justify-between">
                                    <label htmlFor="password" className="text-sm mb-2">
                                        Password
                                    </label>
                                </div>

                                <div className="flex items-center relative">
                                    <input
                                        type="password"
                                        name="password"
                                        autoComplete="new-password"
                                        id="password"
                                        required
                                        placeholder="*******"
                                        className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-blue-500 bg-gray-200 text-gray-900"
                                    />

                                </div>
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
                                            <div className="bg-blue-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-blue-500">
                                                {uploadButtonText}
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>



                        </div>

                        <div>
                            <button
                                type="submit"
                                className="bg-blue-500 w-full rounded-md py-3 text-white"
                            >
                                {loader ? (
                                    <TbFidgetSpinner className="animate-spin m-auto" />
                                ) : (
                                    "Continue"
                                )}
                            </button>
                        </div>
                    </form>


                    <p className="px-6 text-sm text-center text-gray-400">
                        Already have an account?{" "}
                        <Link
                            href="/login"
                            className="hover:underline hover:text-rose-500 text-gray-600"
                        >
                            Login
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </>
    );
};

export default Signup;