import React from "react";

const Spinner = () => {
  return (
    <div className="fixed top-0 left-0 bg-stone-200/20 w-full h-screen flex items-center justify-center backdrop-blur-sm">
      <div className="loader"></div>
    </div>
  );
};

export default Spinner;
