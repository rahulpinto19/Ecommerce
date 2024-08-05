import React from "react";
import Products from "./components/Products";
import Header from "./components/navbar/Header";
import OrdersPage from "./components/Orders_page";
import Home from "./components/Home";
import WishList from "./components/WishList";
import Login from "./components/Login";
import {
  Route,
  Routes,
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UserCard from "./components/navbar/UserCard";
import ProductList from "./components/ProductList";
import Profile_Page from "./components/Profile_Page";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Login />
        </>
      ),
    },
    {
      path: "/home",
      element: (
        <>
          <Home />
        </>
      ),
    },
    {
      path: "/home/profile",
      element: (
        <>
        <Profile_Page/>
        </>
      ),
    },
    {
      path: "/home/wishlist",
      element: (
        <>
          <WishList />
        </>
      ),
    },

    {
      path: "/home/orders",
      element: (
        <>
          <OrdersPage />
        </>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
      {/* <div className="flex flex-col">
        <div className="pd-10">
          <Header />
        </div>
        <div className=" p-5">
          <Products />
        </div>
      </div> */}
    </>
  );
};

export default App;
