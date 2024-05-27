import React from 'react';
import circle from '../assets/ovallaptop.png';
import lock from '../assets/tick.png';
import button from '../assets/signin.png';

const PasswordChanged = () => {
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
        
          <img src={lock} alt="Password Changed" className="h-12 w-12 mb-4" />
          <h2 className="text-3xl mb-6">Password Changed!</h2>
          <p className="text-sm mb-4">You successfully changed your password.</p>
        
        <div className="mb-4">
          <button type="button" className="cursor-pointer">
            <img src={button} alt="Login Button" />
          </button>
        </div>
        
        {/* Sign Up Text */}
        <p className="lg:absolute lg:top-0 lg:right-0 lg:text-right lg:text-green-500 lg:mt-4 lg:mr-4">Don’t have an account? Sign Up</p>
      </div>
    </div>
  );
}

export default PasswordChanged;
