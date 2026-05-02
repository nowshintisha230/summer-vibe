import React from "react";
import { Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const AllProducts = async () => {
  const res = await fetch("https://summer-vibe.vercel.app/data.json");
  const products = await res.json();

  return (
    <div className="grid grid-cols-1 lg:container lg:mx-auto sm:grid-cols-2 lg:grid-cols-3 gap-5 m-5">
      {products.map((product) => (
        <Card
          key={product.id}
          className="group w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition hover:shadow-xl"
        >
          {/* Image */}
          <div className="relative h-48 w-full overflow-hidden bg-gray-50">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain p-2 transition duration-300 group-hover:scale-105"
            />
          </div>

          {/* Content */}
          <div className="space-y-2 p-4">
            {/* Brand + Category */}
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span className="uppercase tracking-wide">{product.brand}</span>
              <span className="rounded-full bg-sky-100 px-2 py-1 text-sky-600">
                {product.category}
              </span>
            </div>

            {/* Name */}
            <h2 className="line-clamp-1 text-lg font-semibold text-gray-800">
              {product.name}
            </h2>

            {/* Description */}
            <p className="line-clamp-2 text-sm text-gray-500">
              {product.description}
            </p>

            {/* Rating + Stock */}
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-yellow-500">
                ⭐ {product.rating}
              </span>
              <span className="text-gray-500">
                Stock: {product.stock}
              </span>
            </div>

            {/* Price + Button */}
            <div className="flex items-center justify-between pt-2">
              <p className="text-lg font-bold text-green-600">
                ${product.price}
              </p>

              <Link href={`/all-products/${product.id}`}>
                <button className="rounded-xl bg-black px-4 py-2 text-sm text-white transition hover:bg-gray-800">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default AllProducts;