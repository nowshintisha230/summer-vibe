"use client";

import { useState, useEffect } from "react";

const slides = [
  {
    title: "Summer Sale 50% OFF ☀️",
    subtitle: "Grab your favorite products at half price",
    button: "Shop Now",
  },
  {
    title: "Hot Deals 🔥",
    subtitle: "Limited time offers you don’t want to miss",
    button: "Explore Deals",
  },
  {
    title: "Mega Discount Weekend 🛍️",
    subtitle: "Big savings on all categories",
    button: "Start Shopping",
  },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[index];

  return (
    <section className="container rounded-xl my-5 mx-auto bg-gradient-to-r from-orange-500 to-pink-500 text-white">
      <div className="max-w-6xl mx-auto px-6 py-20 text-center transition-all duration-500">

        {/* Badge */}
        <span className="bg-white text-orange-500 px-4 py-1 rounded-full text-sm font-semibold">
          Limited Time Offer
        </span>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mt-6">
          {slide.title}
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-lg opacity-90">
          {slide.subtitle}
        </p>

        {/* Button */}
        <button className="mt-6 bg-white text-orange-500 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition">
          {slide.button}
        </button>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {slides.map((_, i) => (
            <span
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                i === index ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}