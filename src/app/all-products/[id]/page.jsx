import Link from "next/link";

const ProductDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch("https://summer-vibe.vercel.app/data.json");
  const products = await res.json();

  const product = products.find(p => p.id == id);

  if (!product) return <div>Product not found</div>;

  const stars =
    "★".repeat(Math.round(product.rating)) +
    "☆".repeat(5 - Math.round(product.rating));

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
        
        {/* ✅ Responsive grid fixed */}
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[420px]">

          {/* Image */}
          <div className="bg-gray-50 flex items-center justify-center p-8">
            <img
              src={product.image}
              alt={product.name}
              className="w-full max-w-xs h-64 object-cover rounded-xl"
            />
          </div>

          {/* Details */}
          <div className="p-7 flex flex-col gap-3">

            {/* Badges */}
            <div className="flex gap-2">
              <span className="text-xs px-3 py-1 rounded-md bg-blue-50 text-blue-600 font-medium">
                {product.category}
              </span>
              <span className="text-xs px-3 py-1 rounded-md bg-green-50 text-green-600 font-medium">
                {product.stock > 0 ? "In Stock" : "Out of Stock"}
              </span>
            </div>

            {/* Name & Brand */}
            <div>
              <p className="text-xs text-gray-400 mb-1">{product.brand}</p>
              <h1 className="text-xl font-medium text-gray-900 leading-snug">
                {product.name}
              </h1>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <span className="text-amber-400 text-base tracking-wide">
                {stars}
              </span>
              <span className="text-sm text-gray-400">
                {product.rating} / 5
              </span>
            </div>

            {/* Price */}
            <div className="text-3xl font-medium text-gray-900">
              ${product.price}.00
            </div>

            {/* Description */}
            <p className="text-sm text-gray-500 leading-relaxed">
              {product.description}
            </p>

            {/* Info Table */}
            <div className="border-t border-gray-100 pt-3 mt-1">
              <table className="w-full text-sm">
                <tbody>
                  <tr>
                    <td className="text-gray-400 py-1">Stock</td>
                    <td className="text-right font-medium">
                      {product.stock} units
                    </td>
                  </tr>
                  <tr>
                    <td className="text-gray-400 py-1">Brand</td>
                    <td className="text-right font-medium">
                      {product.brand}
                    </td>
                  </tr>
                  <tr>
                    <td className="text-gray-400 py-1">Category</td>
                    <td className="text-right font-medium">
                      {product.category}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mt-auto">
              <button className="flex-1 py-2.5 bg-gray-900 text-white rounded-xl text-sm font-medium hover:bg-gray-700 transition">
                Add to Cart
              </button>
              <button className="px-4 py-2.5 border border-gray-200 rounded-xl text-sm hover:bg-gray-50 transition">
                ♡
              </button>
            </div>

            {/* See All Products */}
            <Link href="/all-products">
              <button className="w-full py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 transition">
                ← See All Products
              </button>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;