import React from "react";
import UserName from "../features/user/UserName";
import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 p-4 bg-yellow-400 uppercase">
      <Link to={"/"} className="text-lg tracking-[3px]">Fast Pizz Co.</Link>
      <SearchOrder />
      <UserName />
    </header>
  );
};

export default Header;
