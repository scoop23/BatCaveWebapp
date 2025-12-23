"use client";
import React, { useRef } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { StackedCarousel, ResponsiveContainer } from "react-stacked-center-carousel";

export interface PastryProducts {
  cover: string;
  description: string;
  value: number;
}

interface CardProps {
  data: PastryProducts[];
  dataIndex: number;
  slideHeight?: number;
}

const Card: React.FC<CardProps> = React.memo(({ data, dataIndex, slideHeight = 192 }) => {
  const { cover, description, value } = data[dataIndex];
  return (
    <motion.div
      className="relative w-50 h-55 flex-shrink-0 rounded-[200px] overflow-hidden cursor-pointer"
      style={{ height: slideHeight }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <Image
        src={`/images/menufolder/pastries/${cover}`}
        alt={description}
        fill
        className="object-cover rounded-2xl"
        draggable={false}
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center">
        <p className="text-sm font-semibold">{description}</p>
        <p className="text-xs">₱{value}</p>
      </div>
    </motion.div>
  );
});

Card.displayName = "Card";

interface CarouselProps {
  data: PastryProducts[]
  animationVariant : Variants
}

const HorizontalCarousel: React.FC<CarouselProps> = ({ data, animationVariant}) => {
  const carouselRef = useRef<StackedCarousel | null>(null);



  return (
    <motion.div
      variants={animationVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full flex items-center justify-center"
    >
      <div
        style={{
          backgroundImage:"linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(/images/marble.jpeg)",
          backgroundBlendMode: "overlay",
        }}
        className="relative w-full px-4 py-6"
      >
        <ResponsiveContainer
          carouselRef={carouselRef  as any}
          render={(parentWidth) => {
            let visibleSlides = 5; // default desktop
            if (parentWidth < 640) visibleSlides = 1; // mobile
            else if (parentWidth < 1024) visibleSlides = 3; // tablet

            return (
              <StackedCarousel
                ref={carouselRef}
                data={data}
                slideComponent={Card}
                slideWidth={192} // keep your original width
                carouselWidth={parentWidth}
                currentVisibleSlide={visibleSlides}
                maxVisibleSlide={5}
                useGrabCursor
                height={236} // keep your original height
              />
            );
          }}
        />
        <button
          className="absolute top-[140px] -translate-y-1/2 left-[120px] w-10 h-10 bg-red-700 bg-opacity-50 text-white rounded-full flex items-center justify-center z-10"
          onClick={() => carouselRef.current?.goBack()}
        >
          &#8249;
        </button>

        {/* Right Button */}
        <button
          className="absolute top-[140px] -translate-y-1/2 right-[120px] w-10 h-10 bg-red-700 bg-opacity-50 text-white rounded-full flex items-center justify-center z-10"
          onClick={() => carouselRef.current?.goNext()}
        >
          &#8250;
        </button>
      </div>
    </motion.div>
  );
};

export default HorizontalCarousel;
