import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import LinkButton from "../../ui/LinkButton";
import CartItem from "./CartItem";
import { clearItem } from "./cartSlice";
import EmptyCart from "./EmptyCart";
// const fakeCart = [
//   {
//     pizzaId: 12,
//     name: "Mediterranean",
//     quantity: 2,
//     unitPrice: 16,
//     totalPrice: 32,
//   },
//   {
//     pizzaId: 6,
//     name: "Vegetale",
//     quantity: 1,
//     unitPrice: 13,
//     totalPrice: 13,
//   },
//   {
//     pizzaId: 11,
//     name: "Spinach and Mushroom",
//     quantity: 1,
//     unitPrice: 15,
//     totalPrice: 15,
//   },
// ];

function Cart() {
  const { username } = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearItem());
  };

  if (!cart.length) {
    return <EmptyCart />;
  }

  return (
    <div className="font-pizza px-4 py-3">
      <LinkButton to="/menu">Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold ">Your cart, {username}</h2>

      <ul className="px-2 divide-y divide-stone-200 my-4">
        {cart.map((item) => {
          return <CartItem key={item.pizzaId} item={item} />;
        })}
      </ul>

      <div className="mt-6 space-x-4">
        <Button to="/order/new" type={"primary"}>
          Order pizzas
        </Button>
        <Button onClick={handleClear} type={"secondary"}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
