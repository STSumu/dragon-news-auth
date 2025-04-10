import React from 'react';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftNavbar from '../Components/LayoutComponents/LeftNavbar';
import RightNavbar from '../Components/LayoutComponents/RightNavbar';
import { Outlet } from 'react-router';

const HomeLayout = () => {
    return (
        <div className='font-poppins container mx-auto p-6 md:p-10'>
            <header>
                <Header></Header>
                <section>
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav >
                <Navbar></Navbar>
            </nav>
            <main className='grid md:grid-cols-12 gap-4 mt-20'>
                <aside className='left col-span-3'>
                    <LeftNavbar></LeftNavbar>
                </aside>
                <section className='center col-span-6'>
                    <Outlet></Outlet>
                </section>
                <aside className='right col-span-3'>
                    <RightNavbar></RightNavbar>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;