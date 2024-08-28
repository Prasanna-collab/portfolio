import React from "react";
import { FaArrowRight } from "react-icons/fa"; // Import an icon from react-icons

const Next = () => {
  return (
    <button
      className="bg-blue-500 text-white px-3 py-1 rounded-lg shadow-md hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-transform duration-200 flex items-center space-x-2"
      aria-label="View Certificate"
    >
      <span className="flex-shrink-0">
        <FaArrowRight className="w-4 h-4" /> {/* Adjust icon size */}
      </span>
      <span className="text-sm font-medium">View</span> {/* Concise text */}
    </button>
  );
};

export default Next;
