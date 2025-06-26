import React, { use, useState } from 'react';
import { FaEye, FaEyeSlash, FaLink, FaPagelines, FaUser, FaVoicemail } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../AuthComtext_provider/AuthContext';
import Swal from 'sweetalert2';
import LoadingSpinner from '../PrivteRoute/LoadingSpinner';
import { Helmet } from 'react-helmet';

const Register = () => {

    const { createUser, loading, setLoading, google, updateUser } = use(AuthContext)
    // console.log(creaUser)
    // console.log(user)
    const [showpass, setShowpass] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)

    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from.pathname || '/'

    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value
        const terms = form.terms.checked

        const newUser = { name, photo, email }
        // console.log(email, password)
        console.log(newUser)

        if (!terms) {
            setErrorMessage('Accept terms and condition')
            return
        }

        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;

        if (regex.test(password) === false) {
            setErrorMessage('password should be at least 8 characters and include 1 uppercase, 1 lowercase, and a special character')
            return
        }

        setErrorMessage(null)

        createUser(email, password)
            .then(() => {
                const userProfile = {
                    displayName: name,
                    photoURL: photo
                }
                updateUser(userProfile)
                    .then(() => {
                        Swal.fire({
                            icon: "success",
                            title: "Your account is created",
                            showConfirmButton: true,
                            timer: 1500
                        });
                        navigate(from, { replace: true })
                        setLoading(false)
                        fetch('https://green-gardening-server.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(newUser)
                        })
                            .then(res => res.json())
                            .than(data => {
                                console.log(data)
                            })
                    })

                if (!terms) {
                    setErrorMessage('Accept terms and condition')
                    return
                }
            })
            .catch(() => {
                setErrorMessage('Already created')
            })
    }

    const handleGoogle = () => {
        google()
            .then((result) => {
                const user = result.user; // <-- Get the user from result
                Swal.fire({
                    icon: "success",
                    title: "Your account is created",
                    showConfirmButton: true,
                    timer: 1500
                });

                const name = user.displayName;
                const photo = user.photoURL;
                const email = user.email;

                const newUser = { name, photo, email };

                fetch('https://green-gardening-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then((r) => {
                        console.log(r);
                    });
                navigate(from, { replace: true });
            })
            .catch((e) => {
                console.log(e);
                setErrorMessage('Something went wrong with Google login.');
            });
    };

    return (
        <div className='signinBg'>
            <Helmet>
                <title>Green || Register</title>
            </Helmet>
            <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4 hero-overlay">
                <div className="max-w-md w-full">
                    <div className="p-8 rounded-2xl bg-white shadow">
                        <div className=' justify-items-center'>
                            <Link to='/' className='flex items-center justify-center cursor-pointer  w-min'>
                                <FaPagelines className='text-[green] text-4xl '></FaPagelines>
                                <h1 className='text-[green] optionalText font-bold text-4xl'>Green</h1>
                            </Link>
                        </div>
                        <h2 className="text-[black] text-center text-3xl font-semibold mt-5">Register Now</h2>

                        {/* form */}

                        <form onSubmit={handleRegister} className="mt-6 space-y-6">
                            {/* name */}
                            <div>
                                <label className="text-slate-800 text-sm font-medium mb-2 block"> Name</label>
                                <div className="relative flex items-center">
                                    <input name="name" type="text" required className="w-full text-slate-800 text-sm border border-slate-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Enter user name" />
                                    <FaUser className='absolute text-gray-500 right-4'></FaUser>
                                </div>
                            </div>
                            {/* photo */}
                            <div>
                                <label className="text-slate-800 text-sm font-medium mb-2 block">Photo</label>
                                <div className="relative flex items-center">
                                    <input name="photo" type="text" required className="w-full text-slate-800 text-sm border border-slate-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Photo URL" />
                                    <FaLink className='absolute text-gray-500 right-4'> </FaLink>
                                </div>
                            </div>
                            {/* email */}
                            <div>
                                <label className="text-slate-800 text-sm font-medium mb-2 block">Email</label>
                                <div className="relative flex items-center">
                                    <input name="email" type="email" required className="w-full text-slate-800 text-sm border border-slate-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Enter user name" />
                                    <MdEmail className='absolute text-gray-500 right-4'></MdEmail>
                                </div>
                            </div>

                            <div>
                                <label className="text-slate-800 text-sm font-medium mb-2 block">Password</label>
                                <div className="relative flex items-center">
                                    <input name="password" type={showpass ? 'text' : 'password'} required className="w-full text-slate-800 text-sm border border-slate-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Enter password" />
                                    <p onClick={() => setShowpass(!showpass)} className='absolute right-4 cursor-pointer'>
                                        {
                                            showpass ? <FaEye className=' text-gray-500 '></FaEye> : <FaEyeSlash className=' text-gray-500 '></FaEyeSlash>
                                        }
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center justify-between gap-4">
                                <div className="flex items-center">
                                    <input id="remember-me" name="terms" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-slate-300 rounded" />
                                    <label for="remember-me" className="ml-3 block text-sm text-slate-800">
                                        Accept tems and condition
                                    </label>
                                </div>
                            </div>
                            <p className="ml-3 block text-sm text-red-400">{errorMessage}</p>
                            <div className="!mt-12">
                                <button type="submit" className="w-full py-2 px-4 text-[15px] font-medium tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer">
                                    Register
                                </button>
                            </div>
                            <div className='divider divider-neutral text-xl text-black '>or</div>
                            <div onClick={handleGoogle} className='shadow-md flex text-black cursor-pointer w-full justify-center p-3 rounded-lg border border-[black]'>
                                <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="-0.5 0 48 48" version="1.1"> <title>Google-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Color-" transform="translate(-401.000000, -860.000000)"> <g id="Google" transform="translate(401.000000, 860.000000)"> <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"> </path> <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"> </path> <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"> </path> <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"> </path> </g> </g> </g> </svg>
                                <span>Continue with Google</span>
                            </div>
                            <p className="text-slate-800 text-sm !mt-6 text-center">have an account? <Link to='/signin' className="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold">Sign In Now</Link ></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;