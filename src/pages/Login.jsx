import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'; 
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const {loginWithEmailPassword,setUser}=useContext(AuthContext);
    const [error,setError]=useState({});
    const location=useLocation();
    const navigate=useNavigate();
    const handleLogin=(e)=>{
      e.preventDefault();
      const email=e.target.email.value;
      const password=e.target.password.value;
      loginWithEmailPassword(email,password)
      .then((result)=>{
        alert("User Logged in Successfully.");
       setUser(result.user);
       location?.state ? navigate(location.state):navigate('/');
      })
      .catch((err)=>{
        //console.log(err.message);
        setError({...error,login:err.code});
        return;
      });
    }
    return (
    <div className="card mx-auto bg-base-100 w-full max-w-lg  my-16 shrink-0 shadow-2xl p-16">
        <h1 className='text-[#403F3F] font-semibold text-center text-3xl'>Login your account</h1>
      <div className="card-body">
        <form onSubmit={handleLogin} className="fieldset *:w-full">
          <label className="fieldset-label">Email</label>
          <input name="email" type="email" className="input" placeholder="Email" />
          <label className="fieldset-label">Password</label>
          <input name="password" type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
        {
          error.login && <label className='text-xs text-red-700'>{error.login}</label>
        }
        <p className='text-center'>Dont’t Have An Account ? <Link to='/auth/register' className='text-red-600'>Register</Link></p>
      </div>
    </div>
    );
};

export default Login;