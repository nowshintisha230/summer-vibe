import React from "react";

const SummerCareTips = [
  {
    title: "Stay Hydrated",
    desc: "Drink at least 2–3 liters of water daily to avoid dehydration in hot weather.",
    emoji: "💧",
  },
  {
    title: "Sun Protection",
    desc: "Always use SPF 30+ sunscreen before going outside.",
    emoji: "☀️",
  },
  {
    title: "Light Skincare",
    desc: "Use lightweight, non-oily skincare products to keep skin fresh.",
    emoji: "🧴",
  },
];

const TopBrands = [
  { name: "Nike", desc: "Premium sportswear", emoji: "👟" },
  { name: "Adidas", desc: "Comfort & style", emoji: "🏃" },
  { name: "Zara", desc: "Trendy fashion", emoji: "🧥" },
  { name: "H&M", desc: "Affordable style", emoji: "👕" },
];

const ExtraSections = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-12">

      {/* 🌿 Summer Care Tips */}
      <section>
        <h2 className="text-2xl font-bold mb-6">
          🌞 Summer Care Tips
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SummerCareTips.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl border bg-white shadow hover:shadow-lg transition"
            >
              <div className="text-3xl mb-2">{item.emoji}</div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🏷️ Top Brands */}
      <section>
        <h2 className="text-2xl font-bold mb-6">
          ⭐ Top Brands
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TopBrands.map((brand, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border bg-gradient-to-br from-white to-gray-50 shadow-sm hover:shadow-md text-center transition"
            >
              <div className="text-4xl mb-3">{brand.emoji}</div>
              <h3 className="font-semibold text-lg">{brand.name}</h3>
              <p className="text-gray-500 text-sm mt-1">{brand.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default ExtraSections;