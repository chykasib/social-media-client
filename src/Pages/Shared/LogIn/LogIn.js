import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa'
import { AuthContext } from '../../../Context/AuthProvider';
import { useTitle } from '../../../Hooks/Usetitle';
import { toast } from 'react-hot-toast';
const LogIn = () => {
    const { loginByEmailPassword, googleSignIn } = useContext(AuthContext);
    const [error, setError] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    useTitle('login')
    const handleEmailSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        loginByEmailPassword(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                if (user?.uid) {
                    toast('successfully login')
                    form.reset('');
                }
                navigate(from, { replace: true })
            })
            .catch((error) => setError(error.message));
    };

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                if (user?.uid) {
                    toast('successfully login')
                }
            })
            .catch(error => console.error(error))
    }
    return (
        <form onSubmit={handleEmailSignIn} className="relative pt-10 mt-10 pb-8 px-8 mx-auto max-w-lg shadow-xl">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    Username
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                    id="email"
                    type="email"
                    placeholder="Email"
                    name='email'
                    required
                />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline-blue transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                    id="password"
                    type="password"
                    placeholder="Password"
                    name='password'
                    required
                />
            </div>
            <div className="mb-6">
                {error}
            </div>
            <div className="flex items-center justify-between">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-blue transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                    type='submit'
                >
                    Sign In
                </button>
                <Link
                    className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                    href="#"
                >
                    Forgot Password?
                </Link>
            </div>

            <div className="w-full max-w-md">
                <button className="inline-flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-blue" onClick={handleGoogleSignIn}>
                    <FaGoogle className="fill-current h-4 w-4 mr-2" />
                    Sign in with Google
                </button>
            </div>
            <p className='text-center my-4'>New to Gather Up? <Link className='text-success font-bold' to={'/signup'}>Create new account</Link></p>
        </form>
    );
};

export default LogIn;