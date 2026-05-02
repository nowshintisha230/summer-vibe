import React from "react";
import ProductCard from "./ProductCard";


const Data = async () => {
  const res = await fetch("https://summer-vibe.vercel.app/data.json", {
    cache: "no-store",
  });

  const products = await res.json();
  const topProducts = products.slice(0, 8);

  return (
    <div className=" bg-yellow-200 p-6">
    <h1 className="font-bold text-3xl text-center text-yellow-900"> Summer Products</h1>
    <div>{topProducts.map(product => <ProductCard key={product.id} product={product}></ProductCard>)}
</div>

    </div>
  );
};

export default Data;