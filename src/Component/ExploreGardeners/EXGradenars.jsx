import React, { use } from 'react';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import { AuthContext } from '../../AuthComtext_provider/AuthContext';
import LoadingSpinner from '../PrivteRoute/LoadingSpinner';
import { useLoaderData } from 'react-router';
import EachGardener from './EachGardener';
import { Helmet } from 'react-helmet';

const EXGradenars = () => {
    const { loading } = use(AuthContext)
    const gardenars = useLoaderData()

    const{theme}=use(AuthContext)

    console.log(gardenars)

    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    return (
        <div className={`mt-17 ${theme ? 'dark' : ''}`}>
            <Helmet>
                <title>
                    Green || Gardenars
                </title>
            </Helmet>
            <Navigation></Navigation>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5  mx-auto p-5 md:p-10'>
                {
                    gardenars.map(data => <EachGardener key={data._id} data={data}></EachGardener>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default EXGradenars;