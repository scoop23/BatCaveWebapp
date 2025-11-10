// src/components/CoffeeCarousel.tsx
import React, { useState } from "react";
import Image from "next/image";


export const coffeeData = [
  {
    id: 1,
    name: "Caramel Latte",
    imageUrl: "/images/coffee3.png",
    nutrition: { calories: 180, caffeine: "95mg", sugar: "22g" },
  },
  {
    id: 2,
    name: "Vanilla Cold Brew",
    imageUrl: "/images/coffee2.png",
    nutrition: { calories: 150, caffeine: "120mg", sugar: "18g" },
  },
  {
    id: 3,
    name: "Hazelnut Mocha",
    imageUrl: "/images/coffee1.png",
    nutrition: { calories: 210, caffeine: "90mg", sugar: "25g" },
  },
];

type Coffee = {
  id: number;
  name: string;
  imageUrl: string;
  nutrition: {
    calories: number;
    caffeine: string;
    sugar: string;
  };
};

type CoffeeCarouselProps = {
  coffees: Coffee[];
};

const CoffeeCarousel: React.FC<CoffeeCarouselProps> = ({ coffees }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? coffees.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === coffees.length - 1 ? 0 : prev + 1));
  };

  const currentCoffee = coffees[currentIndex];

  return (
    <div className="carousel-container flex items-center justify-center max-w-6xl mx-auto p-6 bg-gray-50 rounded-xl shadow-lg w-[600px]">
      {/* Coffee Image */}
      <div className="coffee-image relative w-1/2 h-96 rounded-lg overflow-hidden">
        <Image
          src={currentCoffee.imageUrl}
          alt={currentCoffee.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Nutrition Info */}
      <div className="coffee-info w-1/2 pl-8">
        <h2 className="text-3xl font-bold mb-4">{currentCoffee.name}</h2>
        <ul className="space-y-2 text-gray-700">
          <li>Calories: {currentCoffee.nutrition.calories}</li>
          <li>Caffeine: {currentCoffee.nutrition.caffeine}</li>
          <li>Sugar: {currentCoffee.nutrition.sugar}</li>
        </ul>

        {/* Navigation */}
        <div className="mt-6 flex space-x-4">
          <button
            onClick={handlePrev}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCarousel;
