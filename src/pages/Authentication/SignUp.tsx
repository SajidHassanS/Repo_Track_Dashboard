import React from 'react';
import backimg from './images/img.png';
import { Link } from 'react-router-dom';
const SignUp: React.FC = () => {
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
          <h2 className="text-3xl text-center text-black font-bold mb-6">Register Account</h2>
          <p className="text-xl text-center text-black mb-6">Try now for FREE! Takes less than a minute.</p>
          <form className="space-y-1">
          <div>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="name"
                  autoComplete="name"
                  placeholder='Name'
                  required
                  className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <div className="mt-4">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder='Email address'
                  required
                  className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <div className="mt-4">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder='Password'
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center mt-7 py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-transform duration-300 transform hover:-translate-y-2"
              >
                Register
              </button>
            </div>
          </form>
          <p className="mt-3 text-center">
           Already have an Account? <Link to="/" className="text-blue-600 hover:text-blue-700">Login here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
