import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import { useTitle } from '../../../Hooks/Usetitle';
const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState(null);
    useTitle('sign up')
    const handleEmailPasswordRegistration = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                if (user?.uid) {
                    toast('successfully login')
                    form.reset('');
                }
            })
            .catch((error) => setError(error.message));
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
                    name='email'
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
                    name='password'
                    required
                />
            </div>
            <p className='text-center'>Already have an account? <Link className='text-primary font-bold' to={'/login'}>Please! login</Link></p>
            <div className="divider">OR</div>
            <div className="w-full max-w-md">
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                >
                    Sign Up
                </button>
            </div>
            {error}
        </form>

    )
};
export default SignUp;