import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router';

const Register = () => {
    const {setUser,createNewUser,updateUser}=useContext(AuthContext);
    const [error,setError]=useState({});
    const navigate=useNavigate();
    const handleLogin=(e)=>{
          e.preventDefault();
          const form=new FormData(e.target);
          const name=form.get("name");
          const email=form.get("email");
          const photo=form.get("photo");
          const password=form.get("password");
          const passValid=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/

          if(password.length <6 || !passValid.test(password)){
             setError({...error, password:"Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character (e.g., !@#$%^&*), and be between 8 to 20 characters long."});
             return;
          }
          const userInfo={
            displayName:name,
            photoURL:photo,
          }
          createNewUser(email,password)
          .then((result)=>{
           // console.log(result);
            setUser(result.user);
            updateUser(userInfo)
            .then(()=>{
              alert("User Profile updated successfully.");
              navigate('/');
            })
            .catch(()=>{
              setError({...error,profileUpdate:"User Profile update failed."});
            })
          })
          .catch((err)=>{
            setError({...error,register:err.message});
          });
          

    }
    return (
        <div className="card mx-auto bg-base-100 w-full max-w-lg  mt-16 shrink-0 shadow-2xl p-16">
        <h1 className='text-[#403F3F] font-semibold text-center text-3xl'>Register your account</h1>
      <div className="card-body">
        <form onSubmit={handleLogin} className="fieldset *:w-full">
          <label className="fieldset-label font-semibold text-[#403F3F]">Your Name</label>
          <input name='name' type="text" className="input" placeholder="Enter your name" />
          <label className="fieldset-label font-semibold text-[#403F3F]">Photo URl</label>
          <input name='photo' type="text" className="input" placeholder="Photo url" />
          <label className="fieldset-label font-semibold text-[#403F3F]">Email</label>
          <input name='email' type="email" className="input" placeholder="Enter your email address" />
          <label className="fieldset-label font-semibold text-[#403F3F]">Password</label>
          <input name='password' type="password" className="input" placeholder="Enter your password" />
          <div className='opacity-70'><input type="checkbox" className="checkbox checkbox-xs mr-2" />Accept Terms & Conditions</div>
          <button className="btn btn-neutral mt-4">Register</button>
        </form>
        {
          error.password && <label htmlFor="" className="text-xs text-red-500">{error.password}</label>

        }
      </div>
    </div>
    );
};

export default Register;