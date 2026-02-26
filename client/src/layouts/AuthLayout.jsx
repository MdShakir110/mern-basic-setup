import React from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">MERN Starter</h2>
          <p className="text-gray-600">Please sign in to your account</p>
        </div>
        <Outlet />
      </div>
      <Toaster position="top-right" />
    </div>
  );
};

export default AuthLayout;
