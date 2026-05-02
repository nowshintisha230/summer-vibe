import { Card } from "@heroui/react";
import Image from "next/image";
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <Card className="group w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition hover:shadow-xl">

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

          <button className="rounded-xl bg-black px-4 py-2 text-sm text-white transition hover:bg-gray-800">
            Add to Cart
          </button>
        </div>

      </div>
    </Card>
  );
};

export default ProductCard;