import React from 'react';
import Navigation from '../Navigation/Navigation';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';

const MyTipsHome = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MyTipsHome;