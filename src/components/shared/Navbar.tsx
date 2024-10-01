"use client"

import Link from "next/link";












const Navbar = () => {

   

   

    const navItems = <>
        <li className='font-bold'><Link href={'/'}>Home</Link></li>
        <li className='font-bold'><Link href={'/login'}>Login</Link></li>
        <li className='font-bold'><Link href={'/'}>Home</Link></li>
        <li className='font-bold'><Link href={'/'}>Home</Link></li>
        
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
                        Logo
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
                                {/* {
                                    user ?  <img alt="Tailwind CSS Navbar component" src={avatar} /> :
                                    <img alt="Tailwind CSS Navbar component" src={avatarImg} />
                                } */}
                               
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                            {/* {user  ? <> {user?.role === 'admin'? <li><Link to={'/dashboard'}>Dashboard</Link></li> : <li><Link to={'/my-booking'}>My Booking</Link></li>}
                                <li><button onClick={()=>dispatch(logout())}>Logout</button></li>
                            </> : <li><Link to={'/login'}>Login</Link></li> } */}
                        </ul>
                    </div>

                  
                   

                </div>
            </div>
       
    );
};

export default Navbar;