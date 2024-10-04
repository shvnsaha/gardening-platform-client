"use client"
import { useAppSelector } from "@/redux/hook";
import avatar from "../../assets/avatar.jpg"
import Image from "next/image";
import Link from "next/link";
import {  useCurrentUserData } from "@/redux/features/authSlice";

const Navbar = () => {


    
    const userData = useAppSelector(useCurrentUserData)

    console.log(userData);



    const navItems = <>
        <li className='font-bold'><Link href={'/'}>Home</Link></li>
        {/* <li className='font-bold'><Link href={`/user-profile/${user?._id}`}>Profile</Link></li> */}
        <li className='font-bold'><Link href={'/about-us'}>About Us</Link></li>


    </>

    return (

        <div className={`navbar bg-base-200 lg:px-10`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>


                <Link href={'/'} className='hidden md:block'>
                    {/* <img src={logo} className='h-10 rounded-full' /> */}
                    {userData?.role}
                </Link>


            </div>

            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1 gap-2">
                    {navItems}
                </ul>
            </div>

            <div className="navbar-end gap-1">

                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {
                                userData ? <Image src={avatar} width={0} height={0} alt="avatar" /> : ""
                                //  <Image src={userData?.profileImg as string} width={0} height={0} alt="avatar" /> 
                            }

                        </div>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                        {userData ? <> {userData?.role === 'admin' ? <li><Link href={'/dashboard'}>Dashboard</Link></li> : <li><Link href={`/user-profile/${userData?._id}`}>My Profile</Link></li>}
                            <li><button>Logout</button></li>
                        </> : <li><Link href={'/login'}>Login</Link></li>}
                    </ul>
                </div>




            </div>
        </div>

    );
};

export default Navbar;