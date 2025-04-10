import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='font-poppins p-6 md:p-10 bg-[#F3F3F3]'>
            <header>
                <Navbar></Navbar>
            </header>
            <Outlet className='container mx-auto'></Outlet>
        </div>
    );
};

export default AuthLayout;