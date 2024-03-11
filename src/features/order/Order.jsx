// Test ID: IIDSAT

import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";

// const order = {
//   id: "ABCDEF",
//   customer: "Jonas",
//   phone: "123456789",
//   address: "Arroios, Lisbon , Portugal",
//   priority: true,
//   estimatedDelivery: "2027-04-25T10:00:00",
//   cart: [
//     {
//       pizzaId: 7,
//       name: "Napoli",
//       quantity: 3,
//       unitPrice: 16,
//       totalPrice: 48,
//     },
//     {
//       pizzaId: 5,
//       name: "Diavola",
//       quantity: 2,
//       unitPrice: 16,
//       totalPrice: 32,
//     },
//     {
//       pizzaId: 3,
//       name: "Romana",
//       quantity: 1,
//       unitPrice: 15,
//       totalPrice: 15,
//     },
//   ],
//   position: "-9.000,38.000",
//   orderPrice: 95,
//   priorityPrice: 19,
// };

function Order() {
  const order = useLoaderData();

  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div>
      <div className="flex items-center my-8 justify-between">
        <h2 className="text-lg font-semibold tracking-wide">Status</h2>

        <div className="flex items-center gap-4">
          {priority && <span className="bg-rose-500 rounded-full px-4 py-1 text-white uppercase text-sm tracking-wide font-medium">Priority</span>}
          <span className="bg-green-500 rounded-full px-4 py-1 text-white uppercase text-sm tracking-wide font-medium">{status} order</span>
        </div>
      </div>

      <div className="bg-stone-200 px-4 py-6 flex items-center justify-between mb-8">
        <p className="font-semibold tracking-wide ">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="italic text-sm text-slate-500">(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      <div className="bg-stone-200 px-4 py-6 flex flex-col gap-4">
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p className="text-lg font-semibold">To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const { orderId } = params;
  const order = await getOrder(orderId);
  return order;
}

export default Order;
