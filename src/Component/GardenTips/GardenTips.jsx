import React, { use } from 'react';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import { Typewriter } from 'react-simple-typewriter';
import { AuthContext } from '../../AuthComtext_provider/AuthContext';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const GardenTips = () => {
    const { loading, user } = use(AuthContext)
    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    const handleAddTips = (e) => {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        // console.log(formData.entries())
        const tipsData = Object.fromEntries(formData.entries())
        tipsData.like = 0
        console.log(tipsData)
        fetch('https://green-gardening-server.vercel.app/tips', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(tipsData)
        })
            .then(res => res.json)
            .then(data => {
                console.log(data)
                Swal.fire({
                    icon: "success",
                    title: "Your tips has been submitet",
                    showConfirmButton: false,
                    timer: 1000
                });
                form.reset();
            })
    }

    return (
        <div className='mt-17'>
            <Helmet>
                <title>
                    Green || Share tips
                </title>
            </Helmet>
            <Navigation></Navigation>
            <div className='signinBg'>
                <div className='hero-overlay'>
                    <p className='text-white font-extrabold text-center px-5 py-20 text-lg md:text-4xl'>

                        <Typewriter
                            words={['Contribute to gardening by sharing Your tips']}
                            loop={0}
                            cursor
                            cursorStyle='|'
                            typeSpeed={10}
                            deleteSpeed={10}
                            delaySpeed={2000}
                        >
                        </Typewriter>
                    </p>
                </div>
            </div>
            <div>
                <div className='px-[30px] md:px-[60px] lg:px-[112px] py-[70px] bg-gray-200 text-black'>
                    <div>
                        <h1 className='text-[45px] font-normal text-center'>Add Your Tips</h1>
                        <p className='text-[18px] text-center'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                    </div>
                    <form onSubmit={handleAddTips} action="" className='mt-[32px]'>
                        <div className='grid grid-cols-1 md:grid-cols-2'>
                            <fieldset className=" p-4">
                                <legend className="">Title <span className='text-red-600 text-xl'>*</span></legend>
                                <input type="text" className="input w-full bg-white " placeholder="Title" name='title' required />
                            </fieldset>
                            <fieldset className="p-4">
                                <legend className="">Plant Type/Topic<span className='text-red-600 text-xl'>*</span></legend>
                                <input type="text" className="input w-full bg-white" placeholder="Plant Type/Topic" name='plt' required />
                            </fieldset>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2'>
                            <fieldset className=" p-4">
                                <legend className="">Difficulty Leve<span className='text-red-600 text-xl'>*</span></legend>
                                <select name='dl' className='input w-full bg-white'>
                                    <option className='bg-[white]' value="Easy">Easy</option>
                                    <option className='bg-[white]' value="Medium">Medium</option>
                                    <option className='bg-[white]' value="Hard">Hard</option>
                                </select>
                            </fieldset>
                            <fieldset className="p-4">
                                <legend className="">Description<span className='text-red-600 text-xl'>*</span></legend>
                                <input type="text" className="input w-full bg-white" placeholder="Description" name='description' required />
                            </fieldset>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2'>
                            <fieldset className=" p-4">
                                <legend className="">Images url<span className='text-red-600 text-xl'>*</span></legend>
                                <input type="text" className="input w-full bg-white " placeholder="Images url" name='imUrl' required />
                            </fieldset>
                            <fieldset className="p-4">
                                <legend className="">Details<span className='text-red-600 text-xl'>*</span></legend>
                                <input type="text" className="input w-full bg-white" placeholder="Details" name='details' required />
                            </fieldset>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2'>
                            <fieldset className=" p-4">
                                <legend className="">Category<span className='text-red-600 text-xl'>*</span></legend>
                                <select name='category' className='input w-full bg-white'>
                                    <option className='bg-[white]' value="Composting">Composting</option>
                                    <option className='bg-[white]' value="Plant Care">Plant Care</option>
                                    <option className='bg-[white]' value="Vertical Gardening"> Vertical Gardening</option>
                                </select>
                            </fieldset>
                            <fieldset className="p-4">
                                <legend className="">Availability <span className='text-red-600 text-xl'>*</span></legend>
                                <select name='availability' className='input w-full bg-white'>
                                    <option className='bg-[white]' value="Public">Public</option>
                                    <option className='bg-[white]' value="Hidden">Hidden</option>
                                </select>
                            </fieldset>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2'>
                            <fieldset className="p-4">
                                <legend className="">Name<span className='text-red-600 text-xl'>*</span></legend>
                                <input value={user.displayName} readOnly type="text" className="input w-full bg-white" placeholder="Name" name='name' required />
                            </fieldset>
                            <fieldset className="p-4">
                                <legend className="">Email<span className='text-red-600 text-xl'>*</span></legend>
                                <input value={user.email} readOnly type="email" className="input w-full bg-white" placeholder="Email" name='email' required />
                            </fieldset>
                        </div>
                        {/* button */}
                        <fieldset className=" p-4">
                            <input type="submit" className="input w-full bg-[green] text-white cursor-pointer font-bold text-sm md:text-lg" value='Submit' required />
                        </fieldset>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default GardenTips;