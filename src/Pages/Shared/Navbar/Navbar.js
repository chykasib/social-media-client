import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

function Navbar() {
    const { user, logOut } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const [theme, setTheme] = useState('bg-white');
    const toggleTheme = () => {
        theme === 'bg-white' ?
            setTheme('bg-black') : setTheme('bg-white');

    };
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);
    const logoutHandler = () => {
        logOut()
            .then(result => {

            })
            .catch(error => console.error(error))
    }
    return (
        <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight">GatherUp</span>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    {isOpen ? (
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Close</title><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" /></svg>
                    ) : (
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>       <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    )}
                </button>
            </div>
            <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'}`}>
                <div className="text-sm lg:flex-grow">
                    <Link to="/" className={`block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 ${location.pathname === '/' ? 'text-white' : ''}`}>
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                        Home
                    </Link>
                    <Link to="/media" className={`block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 ${location.pathname === '/media' ? 'text-white' : ''}`}>
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>
                        Media
                    </Link>
                    <Link to="/message" className={`block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 ${location.pathname === '/message' ? 'text-white' : ''}`}>
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                        Message
                    </Link>
                    <Link to="/about" className={`block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 ${location.pathname === '/about' ? 'text-white' : ''}`}>
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M12 8c1.657 0 3-.895 3-2s-1.343-2-3-2-3-.895-3-2 1.343-2 3-2z" /></svg>
                        About
                    </Link>
                </div>
                {
                    user?.email ? <div>
                        <button onClick={logoutHandler} className="inline-block text-sm px-4 py-2 mr-9 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                            <Link to={'/signup'}>Sing Up</Link>
                        </button>
                    </div> : <div>
                        <button className="inline-block text-sm px-4 py-2 mr-9 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                            <Link to={'/login'}>Login</Link>
                        </button>
                    </div>
                }
                <div>
                    <button onClick={toggleTheme} className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                        Toggle
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;



