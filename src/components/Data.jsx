import React from "react";
import ProductCard from "./ProductCard";


const Data = async () => {
  const res = await fetch("https://summer-vibe.vercel.app/data.json", {
    cache: "no-store",
  });

  const products = await res.json();
  const topProducts = products.slice(0, 3);

  return (
   <div className="bg-yellow-200 p-6">
  <h1 className="font-bold text-3xl text-center text-yellow-900">
   Popular Products
  </h1>

  <div className="grid grid-cols-1 lg:container lg:mx-auto sm:grid-cols-2 lg:grid-cols-3 gap-5 m-5">
    {topProducts.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
</div>
  );
};

export default Data;