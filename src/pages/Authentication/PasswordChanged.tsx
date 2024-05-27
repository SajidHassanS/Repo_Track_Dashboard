import React from 'react';
import loginbtn from '../../../public/assets/loginbtn.png';
import circle from '../../../public/assets/ovallaptop.png';
import lock from '../../../public/assets/tick.png';

const PasswordChanged: React.FC = () => {
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
          <h2 className="text-3xl mb-6 text-left">Password changed!</h2>
          <h6 className="text-sm mb-6 text-left">You successfully changed your password.</h6>
          
          {/* Login Button */}
          <div className="flex items-center justify-between mt-12">
            <button type="submit" className="cursor-pointer">
              <img src={loginbtn} alt="Login Button" />
            </button>
          </div>
        </div>
        <p className="mt-4 text-center text-green-500 lg:absolute lg:top-0 lg:right-0 lg:mt-4 lg:mr-4 lg:text-right">Don’t have an account? Sign Up</p>
      </div>
    </div>
  );
}

export default PasswordChanged;
