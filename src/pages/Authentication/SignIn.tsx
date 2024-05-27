import React from 'react';
import loginbtn from '../../../public/assets/loginbtn.png';
import circle from '../../../public/assets/ovallaptop.png';
import { Link } from 'react-router-dom';

const SignIn: React.FC = () => {
  return (
    <div className="h-screen grid lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
      {/* Left Column */}
      <div className="hidden lg:flex flex-col bg-[#090D28] text-white p-4 lg:w-full xl:w-full 2xl:w-full">
        <h1 className="text-2xl mb-4 text-orange-500">Vizlah</h1>
        <div className="flex-grow flex items-center justify-center">
          <img src={circle} alt="Brand Logo" className="max-w-full h-auto lg:max-w-md" />
        </div>
      </div>
      
      {/* Right Column */}
      <div className="flex flex-col items-center justify-center bg-[#181C3A] text-white p-4 md:p-8 shadow-lg relative lg:w-full xl:w-full 2xl:w-full">
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
          <h2 className="text-3xl mb-4 md:mb-6 text-left">Login To Your Account</h2>
          <h6 className="text-sm mb-4 md:mb-6 text-left">Enter your credentials to access your account.</h6>
          <form>
            <div className="mb-4">
              <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="username">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                id="username"
                type="text"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                id="password"
                type="password"
                placeholder="******************"
              />
              <Link to={'/forget_password'} className="text-gray-400 cursor-pointer text-sm mt-2 text-right">Forgot Password?</Link>
            </div>
            <div className="flex items-center justify-between mt-6 md:mt-12">
              <Link to={'/dashboard'}>
              <button type="submit" className="cursor-pointer">
                <img src={loginbtn} alt="Login Button" />
              </button>
              </Link>
            </div>
          </form>
        </div>
        <Link to={'/signup'} className="mt-4 text-center cursor-pointer text-green-500 lg:absolute lg:top-0 lg:right-0 lg:mt-4 lg:mr-4 lg:text-right">Don’t have an account? Sign Up</Link>
      </div>
    </div>
  );
}

export default SignIn;
