import React from "react";
import { Link } from "react-router-dom";

const LinkButton = ({ children, to }) => {
  return (
    <Link
      to={to}
      className="text-sky-600 hover:underline underline-offset-1 hover:text-sky-500 focus:underline font-semibold tracking-wide space-x-4 outline-none"
    >
      &larr; {children}
    </Link>
  );
};

export default LinkButton;
