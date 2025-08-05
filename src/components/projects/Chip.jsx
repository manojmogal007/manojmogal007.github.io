// Chip.jsx
import React from "react";

const Chip = ({ label }) => {
  return (
    <span className="px-3 py-1 border border-yellow-500 text-yellow-500 rounded-md text-sm font-semibold hover:bg-blue-500 hover:text-white transition duration-200">
      {label}
    </span>
  );
};

export default Chip;
    