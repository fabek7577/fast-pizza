import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchOrder = () => {
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
        placeholder="Search order #"
        className="w-56 rounded-full placeholder-stone-400 font-semibold py-2 px-4 bg-yellow-100 outline-none focus:ring-4 ring-yellow-300 focus:w-64 transition-all duration-300 "
      />
    </form>
  );
};

export default SearchOrder;
