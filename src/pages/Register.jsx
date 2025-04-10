import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className="card mx-auto bg-base-100 w-full max-w-lg  mt-16 shrink-0 shadow-2xl p-16">
        <h1 className='text-[#403F3F] font-semibold text-center text-3xl'>Register your account</h1>
      <div className="card-body">
        <form className="fieldset *:w-full">
          <label className="fieldset-label font-semibold text-[#403F3F]">Your Name</label>
          <input type="text" className="input" placeholder="Enter your name" />
          <label className="fieldset-label font-semibold text-[#403F3F]">Photo URl</label>
          <input type="text" className="input" placeholder="Photo url" />
          <label className="fieldset-label font-semibold text-[#403F3F]">Email</label>
          <input type="email" className="input" placeholder="Enter your email address" />
          <label className="fieldset-label font-semibold text-[#403F3F]">Password</label>
          <input type="password" className="input" placeholder="Enter your password" />
          <div className='opacity-70'><input type="checkbox" className="checkbox checkbox-xs mr-2" />Accept Terms & Conditions</div>
          <button className="btn btn-neutral mt-4">Register</button>
        </form>
        
      </div>
    </div>
    );
};

export default Register;