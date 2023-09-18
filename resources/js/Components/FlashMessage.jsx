import React from 'react';

const FlashMessage = ({ message, type }) => {
  return (
    <div className={`px-5 py-2 rounded-md mx-10 mt-5 text-white ${type == "success" ? "bg-green-300": "bg-red-300"}`}>
      {message}
    </div>
  );
};

export default FlashMessage;
