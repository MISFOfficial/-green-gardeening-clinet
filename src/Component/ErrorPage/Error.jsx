import React from 'react';
import { FaHouseChimneyWindow } from 'react-icons/fa6';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className='errorBg flex'>
            <div className='bg-white text-[#086308]  w-[50%] hidden md:block'>
                <div className='hidden md:flex md:flex-col items-center justify-center h-screen gap-3.5'>
                    <h1 className='text-9xl font-bold optionalText'>404!</h1>
                    <p className='text-6xl text-center'>404! Page Not Found</p>
                <Link to='/' className='text-xl btn bg-[#086308] text-white rounded-[20px] border-none'>
                        <FaHouseChimneyWindow></FaHouseChimneyWindow>
                        <button>Home</button></Link>
                </div>
            </div>
            <div className='h-screen hero-overlay md:w-[50%] '>
                <div className=' flex flex-col items-center justify-center h-screen md:hidden gap-2.5'>
                    <h1 className='text-6xl md:text-9xl font-bold optionalText'>404!</h1>
                    <p className='text-3xl md:text-6xl text-center'>404! Page Not Found</p>
                    <Link to='/' className='text-xl btn bg-white text-black rounded-[20px] border-none'>
                        <FaHouseChimneyWindow></FaHouseChimneyWindow>
                        <button>Home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Error;