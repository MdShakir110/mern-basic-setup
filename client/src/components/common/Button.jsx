import React from "react";
import { motion } from "framer-motion";

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  disabled = false,
  isLoading = false,
}) => {
  const baseStyles =
    "px-6 py-2 rounded-lg font-medium transition-all duration-200 transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {isLoading ? (
        <svg
          className="animate-spin h-5 w-5 mr-3 text-white"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      ) : null}
      {children}
    </motion.button>
  );
};

export default Button;
