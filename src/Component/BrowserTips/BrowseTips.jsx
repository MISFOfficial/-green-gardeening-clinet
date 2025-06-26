import React, { use } from 'react';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router';
import LoadingSpinner from '../PrivteRoute/LoadingSpinner';
import { AuthContext } from '../../AuthComtext_provider/AuthContext';
import { Helmet } from 'react-helmet';

const BrowseTips = () => {

    const { loading, theme } = use(AuthContext)
    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    
    return (
        <div className={`mt-17 ${theme ? 'dark ' : ''}`}>
            <Helmet>
                <title>
                    Green || All Tips
                </title>
            </Helmet>
            <Navigation></Navigation>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default BrowseTips;