import React, { use } from 'react';
import { AuthContext } from '../../AuthComtext_provider/AuthContext';
import { Navigate, useLocation } from 'react-router';
import LoadingSpinner from './LoadingSpinner';

const PrivateRout = ({ children }) => {
    const { user, loading } = use(AuthContext)
    const location = useLocation()

    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    if (!user) {
        return <Navigate to='/signIn' state={{ from: location }} replace></Navigate>
    }
    return children
};

export default PrivateRout;