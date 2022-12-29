import React, { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleEmailPasswordRegistration = (event) => {
        event.preventDefault();
        // .createUserWithEmailAndPassword(email, password)
        // .catch((error) => setError(error.message));
    };

    return (
        <form onSubmit={handleEmailPasswordRegistration} className="relative pt-10 mt-10 pb-8 px-8 mx-auto max-w-lg shadow-xl">
            <div className="mb-4 flex items-center">
                <FaEnvelope className="w-6 h-6 text-gray-500 mr-2" />
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
            <div className="mb-6 flex items-center">
                <FaLock className="w-6 h-6 text-gray-500 mr-2" />
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
            <div className="flex items-center justify-between">
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                >
                    Sign Up
                </button>
                <Link
                    to={''}
                    className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                >
                    Forgot Password?
                </Link>
            </div>
            {error}
        </form>

    )
};
export default SignUp;