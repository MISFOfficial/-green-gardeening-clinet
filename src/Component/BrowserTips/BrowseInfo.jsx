import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { AuthContext } from '../../AuthComtext_provider/AuthContext';

const BrowseInfo = () => {
    const tipsData = useLoaderData()
    const { user, theme } = useContext(AuthContext);


    const [visibilityFilter, setVisibilityFilter] = useState('all');
    const [difficultyFilter, setDifficultyFilter] = useState('all');

    // Step 1: Filter based on user and availability
    const filteredPosts = user ? tipsData
        : tipsData.filter(post => post.availability.toLowerCase() === 'public');

    // Step 2: Apply visibility and difficulty filters
    const finalPosts = filteredPosts.filter(post => {
        const status = post.availability.toLowerCase();
        const difficulty = post.dl?.toLowerCase();

        const visibilityMatch = visibilityFilter === 'all' || status === visibilityFilter;
        const difficultyMatch = difficultyFilter === 'all' || difficulty === difficultyFilter;

        return visibilityMatch && difficultyMatch;
    });

    return (
        <div className='py-5 md:py-10'>
            <div className="lg:px-60 px-4 mb-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                {/* Visibility Filter */}
                <div>
                    <label className={`mr-2 font-semibold`}>Filter Tips:</label>
                    <select
                        className={`select select-sm select-bordered ${theme ? 'text-black' : ''}`}
                        value={visibilityFilter}
                        onChange={(e) => setVisibilityFilter(e.target.value)}
                    >
                        <option className={`${theme ? 'text-black' : ''}`} value="all">All</option>
                        <option className={`${theme ? 'text-black' : ''}`} value="public">Public</option>
                        <option className={`${theme ? 'text-black' : ''}`} value="hidden" disabled={!user}>Hidden</option>
                    </select>
                </div>

                {/* Difficulty Level Filter */}
                <div>
                    <label className="mr-2 font-semibold">Difficulty Level:</label>
                    <select
                        className={`select select-sm select-bordered ${theme ? 'text-black' : ''}`}
                        value={difficultyFilter}
                        onChange={(e) => setDifficultyFilter(e.target.value)}
                    >
                        <option className={`${theme ? 'text-black' : ''}`} value="all">All</option>
                        <option className={`${theme ? 'text-black' : ''}`} value="easy">Easy</option>
                        <option className={`${theme ? 'text-black' : ''}`} value="medium">Medium</option>
                        <option className={`${theme ? 'text-black' : ''}`} value="hard">Hard</option>
                    </select>
                </div>
            </div>

            <div className="overflow-x-auto lg:px-60">
                <table className="table">
                    <thead>
                        <tr>
                            <th className={`text-[12px] md:text-[16px] ${theme? 'text-white' : ''}`}>Title</th>
                            <th className={`text-[12px] md:text-[16px] ${theme? 'text-white' : ''}`}>Publisher</th>
                            <th className={`text-[12px] md:text-[16px] ${theme? 'text-white' : ''}`}>Status</th>
                            <th className={`text-[12px] md:text-[16px] ${theme? 'text-white' : ''}`}>Category</th>
                            <th className={`text-[12px] md:text-[16px] ${theme? 'text-white' : ''}`}>Plant Type/Topic</th>
                            <th className={`text-[12px] md:text-[16px] ${theme? 'text-white' : ''}`}>Difficulty Level</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            finalPosts.length > 0 ? finalPosts.map(data => (
                                <tr key={data._id}>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-15 w-15">
                                                    <img src={data.imUrl} alt="Post" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold text-center">{data.title}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='font-bold'>{data.name}</td>
                                    <td>{data.availability}</td>
                                    <td>{data.category}</td>
                                    <td>{data.plt}</td>
                                    <td>{data.dl}</td>
                                    <td>
                                        <Link to={`/tips/${data._id}`}>
                                            <button className="btn bg-green-600 text-[8px] md:text-[12px] text-white btn-md">
                                                See more...
                                            </button>
                                        </Link>
                                    </td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan="7" className="text-center text-red-500 font-semibold">
                                        No posts found for this filter.
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BrowseInfo;