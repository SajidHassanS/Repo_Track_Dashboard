import React from 'react';
import backimg from './images/img.png';
import { Link } from 'react-router-dom';
const EmailInstructions: React.FC = () => {
  return (
    <div className="min-h-screen flex">
      <div
        className="hidden md:block w-full md:w-3/5 bg-cover bg-center relative flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(180deg, #5055f5, rgba(46, 53, 71, 0.35)), url(${backimg})`
        }}
      >
        <div className="relative text-white p-8 w-180 mt-25 ml-15">
          <h1 className="inline max-w-none mb-20 text-white text-8xl font-bold">Hello RepoTrack!</h1>
          <p className="text-xl mt-5 mb-8">Skip repetitive and manual sales-marketing tasks. Get highly productive
            through automation and save tons of time!
          </p>
          <p className="text-gray-300 mt-30" style={{ opacity: 0.7 }}>© 2024 RepoTrack. All rights reserved.</p>
        </div>
      </div>
      <div className="w-full md:w-2/5 bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <h2 className="text-3xl text-center text-black font-bold mb-6">Email Instructions Sent</h2>
          <p className="text-xl text-center text-black mb-6">Please follow the instructions from mail to reset password</p>
          <p className="mt-3 text-center">
            Don't have an account? <Link to="/signup" className="text-blue-600 hover:text-blue-700">Register Now</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailInstructions;
