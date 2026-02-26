import React from "react";

const Input = React.forwardRef(
  (
    { label, error, type = "text", placeholder, className = "", ...props },
    ref,
  ) => {
    return (
      <div className={`mb-4 ${className}`}>
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
        )}
        <input
          ref={ref}
          type={type}
          placeholder={placeholder}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${
            error ? "border-red-500" : "border-gray-300"
          }`}
          {...props}
        />
        {error && (
          <p className="mt-1 text-xs text-red-500 font-medium">
            {error.message}
          </p>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
