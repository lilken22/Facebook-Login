import React from 'react';
import facebookLogo from '../Images/Facebook-Logo-2019.png';

const FacebookLogin = () => {
  return (
    <div className="block items-center justify-center h-screen bg-gray-100">

      <div className="mt-4 ">
          <img src={facebookLogo} alt="Facebook Logo" className="mx-auto w-[250px] h-[90px]" />
        </div>

      <div className="bg-white rounded-lg shadow-lg m-auto text-center p-6 w-11/12 max-w-md">
        <form className="space-y-4">
          <p className="text-2xl font-semibold">Login to Facebook</p>
          <input
            type="text"
            placeholder="Email or Phone"
            required
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="w-full p-3 border rounded-lg"
          />
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          > 
            <a
              href="https://www.facebook.com/r.php?locale=en_GB&display=page"
              className="block w-full"
            >
             Log In 
            </a>
          </button>
          <div className="text-blue-600 mt-4">
            <a
              href="https://www.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0"
              className="hover:underline"
            >
              Forgotten account?
            </a>
          </div>
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="mx-4 text-gray-500">or</span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
          <button className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            <a
              href="https://www.facebook.com/r.php?locale=en_GB"
              className="block w-full"
            >
              Create new account
            </a>
          </button>
        </form>
      </div>
    </div>
  );
};

export default FacebookLogin;

