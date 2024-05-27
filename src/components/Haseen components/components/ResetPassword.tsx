import React from 'react';
import circle from '../assets/ovallaptop.png';
import lock from '../assets/lock.png';
import button from '../assets/changepass.png';

const ResetPassword = () => {
  return (
    <div className="h-screen overflow-y-auto flex flex-col lg:flex-row">
      {/* Left Column */}
      <div className="lg:w-1/3 bg-[#090D28] flex flex-col p-4 text-white">
        <h1 className="text-2xl mb-4 text-orange-500">Vizlah</h1>
        <div className="flex flex-grow items-center justify-center">
          <img src={circle} alt="Brand Logo" className="max-w-full h-auto lg:max-w-xs" />
        </div>
      </div>
      
      {/* Right Column */}
      <div className="lg:w-2/3 bg-[#090D28] flex flex-col justify-center p-4 text-white shadow-lg relative">
        
          <img src={lock} alt="Reset Password" className="h-12 w-12 mb-4" />
          <h2 className="text-3xl mb-6">Reset Password</h2>
          
          <div className="mb-4" style={{ maxWidth: '500px' }}>
            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-transparent" id="password" type="password" placeholder="Enter your password" />
          </div>

          <div className="mb-4" style={{ maxWidth: '500px' }}>
            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-transparent" id="confirmPassword" type="password" placeholder="Confirm your password" />
          </div>
          
          <div className="mb-4 h-10">
            <button type="submit" className="cursor-pointer">
              <img src={button} alt="Reset Password Button" />
            </button>
          </div>
          
        {/* Sign Up Text */}
        <p className="lg:absolute lg:top-0 lg:right-0 lg:text-right lg:text-green-500 lg:mt-4 lg:mr-4">Don’t have an account? Sign Up</p>
      </div>
    </div>
  );
}

export default ResetPassword;
