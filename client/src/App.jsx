import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          React + Tailwind CSS
        </h1>
        <p className="text-gray-700 text-lg">
          Your MERN frontend setup is complete!
        </p>
        <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Click Me
        </button>
      </div>
    </div>
  );
}

export default App;
