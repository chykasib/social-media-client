import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer style={{ backgroundColor: '#333', color: '#fff', padding: '1rem' }} className="mx-auto mt-16">
            <div className="flex justify-center items-center mt-10">
                <Link to="#" style={{ marginRight: '0.5rem' }}><FaFacebook /></Link>
                <Link to="#" style={{ marginRight: '0.5rem' }}><FaTwitter /></Link>
                <Link to="#"><FaInstagram /></Link>
            </div>
            <div style={{ fontSize: '.8rem', textAlign: 'center', marginTop: '.5rem' }} className="text-center pb-10">
                Copyright &copy; {new Date().getFullYear()} GatherUp
            </div>
        </footer>
    );
}

export default Footer;

