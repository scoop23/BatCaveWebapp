"use client"
import React from "react";
import Image from "next/image";
import { getImagePath} from "./ImageGallery";
import { motion } from 'framer-motion'
import { useRef } from "react";

export const coffeeProducts = [
  {
    cover: "menufolder/imagecof22.png",
    description: "Rich and aromatic espresso with a bold flavor.",
    value: 150
  },
  {
    cover: "menufolder/imagecof21.png",
    description: "Smooth latte with a creamy texture and subtle sweetness.",
    value: 180
  },
  {
    cover: "menufolder/imagecof47.png",
    description: "Velvety cappuccino topped with a delicate layer of foam.",
    value: 170
  },
  {
    cover: "menufolder/imagecof48.png",
    description: "Intense dark roast with deep chocolate notes.",
    value: 200
  },
  {
    cover: "menufolder/imagecof50.png",
    description: "Light and fruity brew with a refreshing aroma.",
    value: 160
  }
];


interface ImageFile {
  cover : string,
  description : string,
  value : number
}

interface CardProps {
  data : ImageFile[],
  dataIndex : number,
  slideHeight? : number
}

const Card : React.FC<CardProps>=  React.memo( ({ data , dataIndex, slideHeight = 450 }) => {
  const coverString  = data[dataIndex].cover;
  const path = getImagePath(coverString);
  const { description , value } = data[dataIndex];

  // animation variants for the children
  const overlayVariants = {
    initial: { opacity: 0 },
    hover: { opacity: 0.52 },
  };

  const textVariants = {
    initial: { y: 10 },
    hover: { y: 0 },
  };

  const slideComponentRef = useRef<HTMLDivElement>(null);
  
  return (
    <motion.div style={{ width: "100%", height: slideHeight, userSelect: "none",}}
    className="my-slide-component"
    ref={slideComponentRef} 
    initial="initial" // designate the key for the variants/objects to the children 
    animate="initial" // also designate
    whileHover="hover"  // also designate if i change the object to like hoverme then i should change this to hoverme too
    variants={{
      initial : { scale : 1},
      hover : { scale : 1.1}
    }}
    transition={{ type : "spring" , damping : 10, stiffness : 160 }}
    >
      <Image
        alt="slide-image"
        fill // makes the image fill the parent
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className='object-cover rounded-2xl'
        draggable={false}
        src={path}
      />

      {/* the overlay  */}
      <motion.div
        className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-white text-center p-4 rounded-2xl"
        variants={overlayVariants}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <motion.p 
        className="text-lg font-semibold mb-2" 
        variants={textVariants}
        transition={{ duration : 0.3, ease: "easeOut" }}>
          {description}
        </motion.p>

        <motion.p 
        className="text-sm opacity-80" 
        variants={textVariants} 
        transition={{ duration : 0.8, }}>
          ₱{value}
        </motion.p>

      </motion.div>

    </motion.div>
  );
});

Card.displayName = "Card"

export default Card