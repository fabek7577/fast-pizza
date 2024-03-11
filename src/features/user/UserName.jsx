import React from "react";
import { useSelector } from "react-redux";

const UserName = () => {
  const { username } = useSelector((state) => state.user);
  return (
    <p title="username" className="font-semibold">
      {username}
    </p>
  );
};

export default UserName;
