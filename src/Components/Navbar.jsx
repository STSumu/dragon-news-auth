import React, { useContext } from 'react';
import { Link, NavLink } from "react-router";
import profile from '../assets/user.png'
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const {user,logOut}=useContext(AuthContext);
    //console.log(user);
    const handleLogOut=()=>{
        logOut()
        .then(()=>{
            alert('User logged out successfully.')
        })
        .catch((err)=>{
            alert(err.message);
        })
    }

    return (
        <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='justify-start'>{user && user.displayName}</div>
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
            {
  user && user.email ? (
    <div className='flex items-center gap-2'>
      <img className='w-10 h-10 rounded-full object-cover' src={user.photoURL || profile} alt="User" />
      <button onClick={handleLogOut} className="btn bg-[#2c2a2a] text-white">Log Out</button>
    </div>
  ) : (
    <div className='flex items-center gap-2'>
      <img className='w-10 h-10 rounded-full object-cover' src={profile} alt="Default User" />
      <Link to='/auth/login' className="btn bg-[#2c2a2a] text-white">Login</Link>
    </div>
  )
}

        </div>
    );
};

export default Navbar;