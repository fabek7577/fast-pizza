import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Input = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/order/${query}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="input"
      />
    </form>
  );
};

export default Input;
