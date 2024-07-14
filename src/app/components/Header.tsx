import React from 'react';

const Header = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-gray-800  flex justify-between items-center">
      <div className="flex items-center">
        <a href="/" className="px-4 py-2 text-2xl font-bold text-white">
          YPL Perfomance
        </a>
      </div>
      <div className="flex items-center">
        <a href="/login" className="text-sm text-gray-300 hover:text-gray-100  ease-in-out px-4 py-2">Sign In</a>
        <a href="/register" className="ml-4 text-sm text-gray-300 hover:text-gray-100 ease-in-out px-4 py-2">Register</a>
      </div>
    </nav>
  );
};

export default Header;