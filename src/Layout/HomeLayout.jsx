import React, { use } from 'react';
import Navigation from '../Component/Navigation/Navigation';
import Footer from '../Component/Footer/Footer';
import Featured from '../Component/Home/Featured';
import Bannder from '../Component/Home/Bannder';
import TopTrend from '../Component/Home/TopTrend';
import { AuthContext } from '../AuthComtext_provider/AuthContext';
import LoadingSpinner from '../Component/PrivteRoute/LoadingSpinner';
import { useLoaderData } from 'react-router';
import Count from '../Component/Home/Count';
import GetApps from '../Component/Home/GetApps';
import { Helmet } from 'react-helmet';

const HomeLayout = () => {

    const activeGardeners = useLoaderData()
    const { loading, theme } = use(AuthContext)
    // console.log(data)
    console.log(activeGardeners)
    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    return (
        <div>
            <Helmet>
                <title>Green</title>
            </Helmet>
            <Navigation></Navigation>
            <Bannder></Bannder>
            <Count></Count>
            <div data-theme={theme ? 'dark' : 'light'} className={`py-10  px-5 md:px-10 lg:px-20 ${theme ? 'dark' : 'bg-gray-200'}`}>
                <h1 className='text-start text-4xl font-extrabold text-[#077107]'>Featured Gardeners</h1>
                <div className={`${theme ? 'bg-transparent' : 'bg-[white]'} mt-10 py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-10 rounded-2xl  w-full`}>
                    {
                        activeGardeners?.map(AGdata => <Featured key={AGdata?._id} AGdata={AGdata}></Featured>)
                    }
                </div>
            </div>
            <div className={` ${theme ? 'bg-gray-800 text-white' : ''} py-10 px-5 md:px-10 lg:px-20`}>
                <h1 className={`text-start  text-4xl font-extrabold text-[#077107]`}>Top Tips</h1>
                <TopTrend></TopTrend>
            </div>
            <GetApps></GetApps>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;