import React from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm py-4 px-6 fixed w-full top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">MERN Starter</h1>
          <nav>
            <ul className="flex space-x-6 text-gray-600">
              <li className="hover:text-blue-600 cursor-pointer">Dashboard</li>
              <li className="hover:text-blue-600 cursor-pointer">Profile</li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 pt-24 pb-12">
        <Outlet />
      </main>

      <footer className="bg-white border-t py-6 text-center text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} MERN Starter. All rights reserved.
        </p>
      </footer>

      <Toaster position="top-right" />
    </div>
  );
};

export default MainLayout;
