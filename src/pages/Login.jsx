import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
    <div className="card mx-auto bg-base-100 w-full max-w-lg  my-16 shrink-0 shadow-2xl p-16">
        <h1 className='text-[#403F3F] font-semibold text-center text-3xl'>Login your account</h1>
      <div className="card-body">
        <form className="fieldset *:w-full">
          <label className="fieldset-label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="fieldset-label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
        <p className='text-center'>Dont’t Have An Account ? <Link to='/auth/register' className='text-red-600'>Register</Link></p>
      </div>
    </div>
    );
};

export default Login;