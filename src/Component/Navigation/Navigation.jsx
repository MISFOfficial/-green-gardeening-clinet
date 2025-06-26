import React, { use } from 'react';
import ThemeToggole from '../Toggle/ThemeToggole';
import { Link, NavLink, useNavigate } from 'react-router';
import { FaPagelines } from 'react-icons/fa6';
import { AuthContext } from '../../AuthComtext_provider/AuthContext';
import Swal from 'sweetalert2';
import { Tooltip } from 'react-tooltip';

const Navigation = () => {

    const { user, logOut, theme } = use(AuthContext)
    const navigate = useNavigate()
    // console.log(user.photoURL)

    const navLink = <>
        <NavLink to='/' className={({ isActive }) => isActive ? 'bg-[green] text-white px-4 py-1 duration-150  text-[18px] border-[green]' : 'hover:bg-[green] hover:text-[white] px-4 py-1 duration-150  text-[18px] border border-[green]'}><li>Home</li></NavLink>
        <NavLink to='/gardenars' className={({ isActive }) => isActive ? 'bg-[green] text-white px-4 py-1 duration-150  text-[18px] border-[green]' : 'hover:bg-[green] hover:text-[white] px-4 py-1 duration-150  text-[18px] border border-[green]'}><li>Explore Gardeners</li></NavLink>
        <NavLink to='/tips' className={({ isActive }) => isActive ? 'bg-[green] text-white px-4 py-1 duration-150  text-[18px] border-[green]' : 'hover:bg-[green] hover:text-[white] px-4 py-1 duration-150  text-[18px] border border-[green]'}><li>Browse Tips</li></NavLink>

        {
            user && <>
                <NavLink to='/sharegardeningtips' className={({ isActive }) => isActive ? 'bg-[green] text-white px-4 py-1 duration-150  text-[18px] border-[green]' : 'hover:bg-[green] hover:text-[white] px-4 py-1 duration-150  text-[18px] border border-[green]'}><li>Share a Garden Tip</li></NavLink>
                <NavLink to='/mytips' className={({ isActive }) => isActive ? 'bg-[green] text-white px-4 py-1 duration-150  text-[18px] border-[green]' : 'hover:bg-[green] hover:text-[white] px-4 py-1 duration-150  text-[18px] border border-[#008000]'}><li>My Tips</li></NavLink>
            </>
        }
    </>


    const handleLogout = () => {
        // console.log('dasfa')
        Swal.fire({
            title: 'Are you sure?',
            text: "You will be logged out!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#008000',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, logout!'
        }).then((result) => {
            if (result.isConfirmed) {
                logOut()
                    .then(() => {
                        navigate('/signIn')
                    })
            }
        });
        // logOut()
    }


    return (
        <div data-theme={theme ? 'dark' : 'light'} className='fixed z-1000 top-0 mx-auto w-full' >
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown mr-5">
                        <div tabIndex={0} role="button" className=" btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <div className='flex justify-end items-center'>
                                <ThemeToggole></ThemeToggole>
                            </div>
                            {
                                navLink
                            }
                        </ul>
                    </div>
                    <div className='flex'>
                        <FaPagelines className='text-[green] text-4xl '></FaPagelines>
                        <h1 className='text-[green] optionalText font-bold text-4xl hidden lg:flex'>Green</h1>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex gap-2">
                        {
                            navLink
                        }
                    </ul>
                </div>
                <div className="navbar-end gap-1">
                    {
                        user ?
                            <div className='navbar-end'>
                                <div className="dropdown mr-5">
                                    <div tabIndex={0} role="button" className=" btn-ghost ">
                                        <Tooltip id='my-name'></Tooltip>
                                        <img data-tooltip-id='my-name'
                                            data-tooltip-content={user.displayName}
                                            data-tooltip-place='left'
                                            className='border-2 border-black rounded-[100%] cursor-pointer w-[50px] h-[50px] object-cover' src={user?.photoURL} alt="" />

                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1000 -left-30 top-15 mt-3 w-52 p-2 shadow">
                                        <div className='flex flex-col justify-center items-center'>
                                            <p className='text-2xl'>{user.displayName}</p>
                                            <button onClick={handleLogout} className="bg-[green] text-white px-4 py-2.5 duration-150 cursor-pointer  text-[18px] ">Sign Out</button>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                            : <div className='navbar-end gap-1'>
                                <Link to='/signin'><a className="bg-[green] text-white px-1.5 py-1 md:px-4 md:py-2.5 duration-150 text-[8px] md:text-[18px] ">Sign In</a></Link>
                                <Link to='/register'><a className="bg-[green] text-white px-1.5 py-1 md:px-4 md:py-2.5 duration-150 text-[8px] md:text-[18px] ">Register</a></Link>

                            </div>
                    }
                    <div className='hidden lg:block'>
                        <ThemeToggole></ThemeToggole>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;