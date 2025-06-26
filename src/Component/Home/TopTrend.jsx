import React, { use, useEffect, useState } from 'react';
import { GiRoyalLove } from 'react-icons/gi';
import { GrLike, GrLikeFill } from 'react-icons/gr';
import { AuthContext } from '../../AuthComtext_provider/AuthContext';

const TopTrend = () => {

    const [topTips, setTopTips] = useState([]);

    const{theme}=use(AuthContext)

    useEffect(() => {
        fetch('https://green-gardening-server.vercel.app/tips/home/limittips')
            .then(res => res.json())
            .then(data => setTopTips(data));
    }, []);

    console.log(topTips)

    return (
        <div className="overflow-x-auto ">
            <h2 className='text-2xl font-bold text-center my-6'>🔥 Top 6 Trending Tips</h2>
            <table className="table mt-4 ">
                <thead>
                    <tr>
                        <th className={`${theme? 'text-white' : ''}`}>Publisher</th>
                        <th className={`${theme? 'text-white' : ''}`}>Email</th>
                        <th className={`${theme? 'text-white' : ''}`}>Title</th>
                        <th className={`${theme? 'text-white' : ''}`}>Likes</th>
                        <th className={`${theme? 'text-white' : ''}`}>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {topTips.map(tip => (
                        <tr key={tip._id}>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img src={tip.imUrl} alt="Author" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className={`font-bold ${theme? 'text-white' : ''}`}>{tip.name}</div>
                                    </div>
                                </div>
                            </td>
                            <td className={`${theme? 'text-white' : ''}`}>{tip.email || 'N/A'}</td>
                            <td className={`${theme? 'text-white' : ''}`}>{tip.title}</td>
                            <td>
                                <div className='flex items-center gap-1'>
                                    <p>{tip.like}</p>
                                    <GrLike className='text-blue-600' />
                                </div>
                            </td>
                            <td>{tip.category}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TopTrend;



