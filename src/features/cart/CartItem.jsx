import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem";
import UpdateCartQuantity from "./UpdateCartQuantity";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="flex justify-between items-center py-4">
      <p className="mb-1">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center space-x-4 font-bold">
        <p>{formatCurrency(totalPrice)}</p>
        <UpdateCartQuantity id={pizzaId} />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
