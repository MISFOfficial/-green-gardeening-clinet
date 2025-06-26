import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase.ini';

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const provider = new GoogleAuthProvider()

    const [theme, setTheme] = useState(false);


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const google = () => {
        return signInWithPopup(auth, provider)
    }

    const updateUser = (userProfile) => {
        setLoading(true)
        return updateProfile(auth.currentUser, userProfile)
    }
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const userInfo = {
        user,
        loading,
        theme,
        setTheme,
        setLoading,
        createUser,
        signIn,
        logOut,
        google,
        updateUser
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;