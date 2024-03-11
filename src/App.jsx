import React, { useEffect } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom";
import Home from "./components/Home";
import Order, { loader as orderLoader } from "./features/order/Order";
import CreateOrder, {
  action as createOrderAction,
} from "./features/order/CreateOrder";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import AppLayout from "./components/AppLayout";
import Error from "./components/Error";
import { useSelector } from "react-redux";

// For Private Route
export const PrivateRoute = ({ children }) => {
  const username = useSelector((state) => state.user.username);
  const navigate = useNavigate();
  useEffect(() => {
    !username && navigate("/");
  }, []);
  if (!username) {
    return <Home />;
  }
  return username && children;
};
// ROUTES
const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "order/:orderId",
        element: <Order />,
        errorElement: <Error />,
        loader: orderLoader,
      },
      {
        path: "menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);
const App = () => {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
};

export default App;
