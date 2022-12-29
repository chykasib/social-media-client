import React from 'react';

const PrimaryAnimateButton = ({ children }) => {
    return (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-blue transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            type='submit'
        >
            {children}
        </button>
    );
};

export default PrimaryAnimateButton;
