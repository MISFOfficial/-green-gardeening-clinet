import React, { use, useEffect, useState } from 'react';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import { AuthContext } from '../../AuthComtext_provider/AuthContext';
import LoadingSpinner from '../PrivteRoute/LoadingSpinner';
import { useLoaderData } from 'react-router';
import AllTip from './AllTip';

const MyTips = () => {
    const tipsData = useLoaderData();
    const { user, loading } = use(AuthContext);
    const [myTips, setMyTips] = useState([]);
    // const [tips, setTips] = useState(myTips)
    console.log(myTips)

    useEffect(() => {
        if (tipsData && user?.email) {
            const filtered = tipsData.filter(tip => tip.email === user.email);
            setMyTips(filtered);
        }
    }, [tipsData, user]);

    if (loading) {
        return <LoadingSpinner />;
    }

    return (
        <div className='mt-17'>
          
            <AllTip
                key={myTips._id}
                myTips={myTips}
                setMyTips={setMyTips}
                >  
            </AllTip>
        </div>
    );
};

export default MyTips;