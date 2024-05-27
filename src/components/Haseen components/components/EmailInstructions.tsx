import React from 'react';
import circle from '../assets/ovallaptop.png';
import lock from '../assets/lock.png';
import button from '../assets/resend.png';

const EmailInstructions = () => {
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
        
          <img src={lock} alt="Forgot Password" className="h-12 w-12 mb-4" />
          <h2 className="text-3xl mb-6">Email instruction sent</h2>
          <p className="text-sm mb-4" style={{ maxWidth: '400px' }}>Please follow the reset instructions in the email we sent to the following address: Yourname@gmail.com</p>
        
        <div className="mb-4 h-10">
          <button type="submit" className="cursor-pointer">
            <img src={button} alt="Send Instructions Button" />
          </button>
        </div>
        {/* Sign Up Text */}
        <p className="lg:absolute lg:top-0 lg:right-0 lg:text-right lg:text-green-500 lg:mt-4 lg:mr-4">Don’t have an account? Sign Up</p>
      </div>
    </div>
  );
}

export default EmailInstructions;
