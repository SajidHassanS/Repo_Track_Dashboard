import React from 'react';
import circle from '../../../public/assets/ovallaptop.png';
import lock from '../../../public/assets/lock.png';
import button from '../../../public/assets/sendinstructions.png';
import { Link } from 'react-router-dom';

const ForgotPassword: React.FC = () => {
  return (
    <div className="h-screen grid lg:grid-cols-2">
      {/* Left Column */}
      <div className="hidden lg:flex bg-[#090D28] text-white p-4">
        <h1 className="text-2xl mb-4 text-orange-500">Vizlah</h1>
        <div className="flex flex-grow items-center justify-center">
          <img src={circle} alt="Brand Logo" className="max-w-full h-auto lg:max-w-md" />
        </div>
      </div>
      
      {/* Right Column */}
      <div className="bg-[#181C3A] flex flex-col items-center justify-center p-8 text-white shadow-lg relative h-screen">
        {/* Sign Up Text */}
        <div className="w-full max-w-sm lg:max-w-md"> {/* Increased max-w on larger screens */}
          <img className='h-12 mb-4' src={lock} alt="lock" />
          <h2 className="text-3xl mb-6 text-left">Forgot your password?</h2>
          <p className="text-sm mb-6 text-left">Enter your registered email below to receive your password reset instructions.</p>
          
          {/* Email Input */}
          <form className="w-full">
            <div className="mb-4">
              <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="email">
                Enter your email
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-transparent" id="email" type="text" placeholder="example@gmail.com" />
            </div>
            <div className="mb-4">
             <Link to={'/'}>
             <button type="submit" className="cursor-pointer">
                <img src={button} alt="Send Instructions Button" />
              </button></Link>
            </div>
          </form>
        </div>
        <Link to={'/signup'} className="mt-4 text-center cursor-pointer text-green-500 lg:absolute lg:top-0 lg:right-0 lg:mt-4 lg:mr-4 lg:text-right">Don’t have an account? Sign Up</Link>
      </div>
    </div>
  );
}

export default ForgotPassword;
