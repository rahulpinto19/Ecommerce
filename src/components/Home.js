import React from "react";
import Header from "./navbar/Header";
import Products from "./Products";
const Home = () => {
  return (
    <div>
      <div className="pb-10">
        <Header />
      </div>
      <div className="pt-16">
        {" "}
        {/* Adjust padding-top according to Header height */}
        <Products />
      </div>
    </div>
  );
};

export default Home;
