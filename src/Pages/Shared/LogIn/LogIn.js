import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleEmailSignIn = (event) => {
        event.preventDefault();
        //   .then(() => )
        //   .catch((error) => setError(error.message));
    };
    const handleGoogleSignIn = () => {
        //   .then(() => )
        //   .catch((error) => setError(error.message));
    };
    return (
        <form onSubmit={handleEmailSignIn} className="relative pt-10 mt-10 pb-8 px-8 mx-auto max-w-lg shadow-xl">
            <label className="block text-gray-700 text-3xl font-bold mb-8">
                Login
            </label>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                    Username
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Password
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline-blue transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                />
            </div>
            <div className="mb-6">
                {error}
            </div>
            <div className="flex items-center justify-between">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-blue transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                    type="button"
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
            <div className="my-4 flex items-center justify-center">
                <button
                    onClick={handleGoogleSignIn}
                    className="flex items-center bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                >
                    <FaGoogle className="w-6 h-6 mr-2" />
                    Sign in with Google
                </button>
            </div>
        </form>
    );
};

export default LogIn;