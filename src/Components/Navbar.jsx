import React from 'react';
import { Link, NavLink } from "react-router";
import profile from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='justify-start'></div>
            <div className='justify-center'>
                <ul className='flex gap-3 opacity-70'>
                    <li >
                        <NavLink className='p-2 rounded-sm' to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className='p-2 rounded-sm' to='/about'>About</NavLink>
                    </li>
                    <li>
                        <NavLink className='p-2 rounded-sm' to='/category'>Category</NavLink>
                    </li>
                </ul>
            </div>
            <div className='flex gap-2 justify-end'>
                <img src={profile} alt="" />
                <Link to='/auth/login' className="btn bg-[#2c2a2a] text-white">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;