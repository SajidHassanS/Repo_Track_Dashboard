import React from 'react';
import loginbtn from '../../../public/assets/loginbtn.png';
import circle from '../../../public/assets/ovallaptop.png';
import { Link } from 'react-router-dom';

const SignUp: React.FC = () => {
  return (
    <div className="h-screen flex flex-col lg:flex-row">
      {/* Left Column */}
      <div className="hidden lg:flex flex-col bg-[#090D28] text-white w-full lg:w-1/2 p-4">
        <h1 className="text-2xl mb-4 text-orange-500">Vizlah</h1>
        <div className="flex flex-grow items-center justify-center">
          <img src={circle} alt="Brand Logo" className="max-w-full h-auto lg:max-w-md" />
        </div>
      </div>
      
      {/* Right Column */}
      <div className="w-full lg:w-1/2 bg-[#181C3A] flex flex-col items-center justify-center p-8 text-white shadow-lg relative h-screen">
        <div className="w-full max-w-sm lg:max-w-md">
          <h2 className="text-3xl mb-6 text-left">Create Your Account</h2>
          <h6 className="text-sm mb-6 text-left">Enter your credentials to access your account.</h6>
          
          {/* Name Input */}
          <div className="mb-4">
            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-transparent" id="name" type="text" placeholder="John Doe" />
          </div>
          
          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="username">
              Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-transparent" id="username" type="text" placeholder="example@gmail.com" />
          </div>
          
          {/* Password Input */}
          <div className="mb-4">
            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-transparent" id="password" type="password" placeholder="******************" />
            <Link to={'/forget_password'} className="text-gray-400 text-sm mt-2 text-right">Forgot Password?</Link>
          </div>
          
          {/* Login Button */}
          <div className="flex items-center justify-between mt-12">
           <Link to={'/'}>
           <button type="submit" className="cursor-pointer">
              <img src={loginbtn} alt="Login Button" />
            </button></Link>
          </div>
        </div>
        <Link to={'/'} className="mt-4 text-center cursor-pointer text-green-500 lg:absolute lg:top-0 lg:right-0 lg:mt-4 lg:mr-4 lg:text-right">Already have an account? Sign In</Link>
      </div>
    </div>
  );
}

export default SignUp;
