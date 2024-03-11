import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPQty, getTotalCartPrice } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalQty = useSelector(getTotalCartPQty);
  const totalPrice = useSelector(getTotalCartPrice);

  if (totalQty < 1) {
    return null;
  }
  return (
    <div className="bg-stone-800 text-stone-200 flex justify-between p-4 uppercase tracking-widest ">
      <p className="space-x-4 font-semibold text-stone-300">
        <span>{totalQty} pizzas</span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>
      <Link to={"/cart"}>Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
