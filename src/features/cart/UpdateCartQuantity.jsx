import React from "react";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  decreeseCartQuantity,
  getCurrentItemQuantity,
  increeseCartQuantity,
} from "./cartSlice";

const UpdateCartQuantity = ({ id }) => {
  const currentQuantity = useSelector(getCurrentItemQuantity(id));

  const dispatch = useDispatch();
  return (
    <div className="flex gap-x-2 items-center text-stone-800">
      <Button
        type={"rounded"}
        onClick={() => dispatch(increeseCartQuantity(id))}
      >
        +
      </Button>
      <p className="font-medium">{currentQuantity}</p>
      <Button
        type={"rounded"}
        onClick={() => dispatch(decreeseCartQuantity(id))}
      >
        -
      </Button>
    </div>
  );
};

export default UpdateCartQuantity;
