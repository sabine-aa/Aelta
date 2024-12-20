import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white p-8 rounded-xl shadow-xl w-96">
        <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Admin Login
        </h1>
        <form>
          <div className="mb-6">
            
            <label className="block text-lg font-medium mb-2 text-gray-600">
              Email
            </label>
            <input
              type="email"
              className="w-full border-2 border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-xl font-medium mb-2 text-gray-600">
              Password
            </label>
            <input
              type="password"
              className="w-full border-2 border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
              placeholder="Enter your password"
            />
          </div>
          <button className="w-full bg-indigo-600 text-white px-4 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500 transition duration-300">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
