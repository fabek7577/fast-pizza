import React from "react";
import CartOverview from "../features/cart/CartOverview";
import { Link, Outlet, useNavigation } from "react-router-dom";
import Spinner from "../ui/Spinner";
import Header from "./Header";
import { PrivateRoute } from "../App";
const AppLayout = () => {
  const navigation = useNavigation();

  return (
    <>
      {navigation.state == "loading" && <Spinner />}
      <div className="grid grid-rows-[auto_1fr_auto] h-screen font-pizza">
        <Header />
        <PrivateRoute>
          <div className="overflow-y-auto">
            <main className="max-w-3xl mx-auto">
              <Outlet />
            </main>
          </div>
        </PrivateRoute>
        <CartOverview />
      </div>
    </>
  );
};

export default AppLayout;
