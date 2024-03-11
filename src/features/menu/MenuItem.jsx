import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem, getCurrentItemQuantity } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateCartQuantity from "../cart/UpdateCartQuantity";

function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  // const cartById = useSelector(findCartById);
  const currentQuantity = useSelector(getCurrentItemQuantity(id));
  const isInCart = currentQuantity > 0;
  const addToCart = () => {
    const cartItem = {
      pizzaId: id,
      name,
      unitPrice,
      quantity: 1,
      totalPrice: 1 * unitPrice,
    };
    dispatch(addItem(cartItem));
  };

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "grayscale opacity-70" : ""}`}
      />
      <div className="flex flex-col pt-1 font-pizza grow">
        <p className="font-medium">{name}</p>
        <p className="text-sm italic text-stone-400 capitalize">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto font-semibold text-stone-500 flex justify-between items-center">
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
          {isInCart && (
            <div className="flex items-center gap-x-4">
              <UpdateCartQuantity id={id} />
              <DeleteItem pizzaId={id} />
            </div>
          )}

          {!soldOut && !isInCart && (
            <Button onClick={addToCart} type={"small"}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
