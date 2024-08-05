import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";
const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch the products from an API or define them statically
    const fetchedProducts = [
      {
        id: 1,
        name: "T-shirt",
        price: 499,
        image: "https://via.placeholder.com/150",
      },
      {
        id: 2,
        name: "Jeans",
        price: 999,
        image: "https://via.placeholder.com/150",
      },
      // Add more products here
    ];
    setProducts(fetchedProducts);
  }, []);
  return (
    <div className="realtive">
      <div className="">
        <h1 className="text-2xl font-bold mb-6">Fashion</h1>
        <ProductList products={products} />
      </div>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-6">Electronics</h1>
        <ProductList products={products} />
      </div>
    </div>
  );
};

export default Products;
