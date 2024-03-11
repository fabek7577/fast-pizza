import { useState } from "react";
import { Form, redirect, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import { useSelector } from "react-redux";
import { getTotalCartPrice } from "../cart/cartSlice";
import { formatCurrency } from "../../utils/helpers";
import store from "../../store";
import EmptyCart from "../cart/EmptyCart";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  const { username } = useSelector((state) => state.user);
  const navigation = useNavigation();
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector(getTotalCartPrice);
  const [withPriority, setWithPriority] = useState(false);
  const [value, setValue] = useState("");

  if (!cart.length) {
    return <EmptyCart />;
  }
  return (
    <div className="px-4 py-6">
      <h2 className="font-semibold text-xl tracking-wide mb-8">
        Ready to order? Let's go!
      </h2>

      <Form method={"POST"}>
        <div className="flex items-center mb-8 gap-2">
          <label className="basis-40">First Name</label>
          <input
            type="text"
            name="customer"
            required
            className="input grow"
            defaultValue={username}
          />
        </div>

        <div className="flex items-center mb-8 gap-2">
          <label className="basis-40">Phone number</label>
          <div className="grow">
            {/* <input type="tel" name="phone" required className="input w-full" /> */}
            <PhoneInput
              country="uz"
              value={value}
              onChange={setValue}
              inputProps={{
                name: "phone",
                required: true,
              }}
              inputClass="!w-full !ps-12 !rounded-full !outline-none !py-1 !px-4 focus:!ring-2 !ring-offset-1 !ring-yellow-400 !border-none !text-stone-800"
              buttonClass="!bg-transparent !border-none !rounded-full !ps-1"
            />
          </div>
        </div>

        <div className="flex items-center mb-8 gap-2">
          <label className="basis-40">Address</label>
          <div className="grow">
            <input
              type="text"
              name="address"
              required
              className="input w-full"
            />
          </div>
        </div>

        <div className="flex items-center mb-8 gap-2">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="w-4 h-4 accent-yellow-400 mr-8"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label
            htmlFor="priority"
            className="tracking-wide text-lg text-stone-800 font-semibold"
          >
            Want to yo give your order priority?
          </label>
        </div>

        <div className="mt-2">
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button disabled={navigation.state === "submitting"} type={"primary"}>
            Order now{" "}
            {withPriority
              ? formatCurrency(totalPrice + totalPrice * 0.2)
              : formatCurrency(totalPrice)}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const object = Object.fromEntries(formData);

  const newOrder = {
    ...object,
    cart: JSON.parse(object.cart),
    priority: object.priority == "true",
  };
  const order = await createOrder(newOrder);
  store.dispatch({ type: "cart/clearItem" });
  return redirect(`/order/${order.id}`);
}

export default CreateOrder;
