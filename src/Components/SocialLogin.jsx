import React from 'react';
import { FaGithub, FaGoogle } from "react-icons/fa";


const SocialLogin = () => {
    return (
        <div className='text-start'>
            <h2 className='font-semibold text-[#403F3F] text-xl mb-4'>Login With</h2>
            <div className='*:w-full space-y-2'>
            <button className="btn text-blue-500">
            <FaGoogle />Login with Google</button>
            <button className="btn">
               <FaGithub></FaGithub> Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;