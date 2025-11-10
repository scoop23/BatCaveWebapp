// src/components/NewBrews.tsx
import React from "react";
import Image from "next/image";
import { motion } from 'framer-motion';

type Brew = {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
};

type NewBrewsProps = {
  brews: Brew[];
};

const NewBrewsCard: React.FC<NewBrewsProps> = ({ brews }) => {
  return (
    <section className="new-brews-container px-4 flex justify-center items-center">
      <div className="grid gap-30 md:grid-cols-2 lg:grid-cols-3 w-[1500px]">
        {brews.map((brew) => (
          <motion.div
            key={brew.id}
            className="brew-card flex bg-[(var(--color-silk-cream))]rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 rounded-[25px]"
          >
            <div className="brew-image relative h-48 w-[450px]">
              <Image
                src={brew.imageUrl}
                alt={brew.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 flex flex-col justify-between">
              <h3 className="text-xl font-semibold mb-2">{brew.name}</h3>
              <p className="text-gray-600 text-[13px]">{brew.description}</p>

              <motion.div className="order-now-btn bg-amber-50 p-1.5 rounded-[25px]" style={{
                
              }}>Order Now</motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default NewBrewsCard;
