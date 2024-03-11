import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, to, disabled, type, onClick }) => {
  const base =
    "outline-none disabled:bg-stone-300 disabled:cursor-not-allowed space-x-4 p-4 uppercase rounded-full font-semibold active:ring-2 focus:outline-none ring-offset-2 transition-colors transition-text duration-300 text-sm border-2 border-transparent";
  const types = {
    primary: `${base} bg-yellow-400 hover:bg-yellow-300 ring-yellow-400`,
    secondary: `${base} text-stone-500 hover:text-black bg-transparent !border-stone-300 hover:bg-stone-300 ring-stone-300`,
    small: `${base} !p-2 !px-4 text-xs text-stone-800 bg-yellow-400 hover:bg-yellow-300 ring-yellow-400`,
    rounded: `${base} rounded-full h-8 w-8 flex items-center justify-center text-lg font-semibold bg-yellow-400 hover:bg-yellow-300 ring-yellow-400`
  };
  if (to) {
    return (
      <Link to={to} className={types[type]}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} disabled={disabled} className={types[type]}>
        {children}
      </button>
    );
  }

  return (
    <button disabled={disabled} className={types[type]}>
      {children}
    </button>
  );
};

export default Button;
