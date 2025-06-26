import React, { use } from 'react';
import { AuthContext } from '../../AuthComtext_provider/AuthContext';
import CountUp from 'react-countup';

const Count = () => {

    const {theme} = use(AuthContext)
    
    return (
        <div data-theme={theme ? 'dark' : 'light'} className={`flex justify-center items-center ${theme ? 'bg-gray-800' : 'bg-white'} py-5`}>
            <div className="stats  ">
                <div className="stat place-items-center">
                    <div className={`stat-title md:text-lg  ${theme? 'text-white' : 'text-black'}`}>Total User</div>
                    <div className="stat-value md:text-6xl"><CountUp end={15} duration={3}>+</CountUp></div>
                    <div className="stat-desc text-[13px]">From January 1st to February 1st</div>
                </div>

                <div className="stat place-items-center">
                    <div className={`stat-title md:text-lg  ${theme? 'text-white' : 'text-black'}`}>On Explore site</div>
                    <div className="stat-value md:text-6xl text-red-400"><CountUp end={420} duration={3}>+</CountUp></div>
                    <div className="stat-desc text-[13px] text-[green]">↗︎ 40 (2%)</div>
                </div>

                <div className="stat place-items-center">
                    <div className={`stat-title md:text-lg  ${theme? 'text-white' : 'text-black'}`}>Total Gardener</div>
                    <div className="stat-value md:text-6xl"><CountUp end={10} duration={3}>+</CountUp></div>
                    <div className="stat-desc text-[red] text-[13px]">↘︎ 90 (14%)</div>
                </div>
            </div>
        </div>
    );
};

export default Count;