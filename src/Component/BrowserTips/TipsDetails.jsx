import React, { useState } from 'react';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import { AiFillLike } from "react-icons/ai";
import { useLoaderData } from 'react-router';
import { Helmet } from 'react-helmet';

const TipsDetails = () => {
    const eachTips = useLoaderData()
    // console.log(eachTips)   
    const { _id, name, imUrl, title, plt, dl, details, availability, category, like, description } = eachTips

    const [likeCount, setLikeCount] = useState(like);

    const handleLike = () => {
        fetch(`https://green-gardening-server.vercel.app/tips/${_id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(result => {
                console.log('after update', result);
                setLikeCount(result.like); // Update frontend like count
            });
    };

    return (
        <div className='flex flex-col justify-center items-center '>
            <Helmet>
                <title>
                    Green || Post {name}
                </title>
            </Helmet>
            <div className='w-full signinBg relative '>
                <div className='hero-overlay w-full h-40 md:h-80'></div>
                <img className='bg-white border object-cover absolute w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 rounded-[1000px] tips' src={imUrl} alt="" />
            </div>
            <div className='mb-2 mt-25 md:mt-40 lg:mt-50 flex gap-3 items-center'>
                <p className='text-xl font-bold'>By: {name}</p>
                <div onClick={() => handleLike(_id)} className='btn'>
                    <AiFillLike className='text-xl'></AiFillLike>
                    <p className='text-xl'>{likeCount}</p>
                </div>
            </div>
            <div className='mb-10 flex  items-center'>
                <p className='text-md font-bold bg-gray-100 px-7 py-2 rounded-xl'>Post: {availability}</p>
                <p className='text-md font-bold bg-gray-100 px-7 py-2 rounded-xl'>Defficulty level: {dl}</p>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>Title</td>
                            <td>{title}</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th>2</th>
                            <td>plt</td>
                            <td>{plt}</td>
                        </tr>
                        {/* row 4 */}
                        <tr>
                            <th>4</th>
                            <td>description</td>
                            <td>{description}</td>

                        </tr>
                        {/* row 4 */}
                        <tr>
                            <th>5</th>
                            <td>Details</td>
                            <td>{details}</td>

                        </tr>
                        <tr>
                            <th>6</th>
                            <td>Category</td>
                            <td>{category}</td>
                        </tr>
                        {/* row 4 */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TipsDetails;