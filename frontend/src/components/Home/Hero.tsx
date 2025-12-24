"use client"
import React from "react";
import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

interface HeroProps {
  animationVariant: Variants;
}

const textContainer : Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 },
  },
};

const textVariant : Variants = {
  hidden: { opacity: 0, y: 20, filter : "blur(10px)"},
  visible: {
    opacity: 1,
    filter : "blur(0px)",
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Hero: React.FC<HeroProps> = ({ animationVariant }) => {
  const [ready, setReady] = useState(false);

  // preload the high-res image
  useEffect(() => {
    const img = new Image();
    img.src = "/images/bg2.jpg";
    img.onload = () => setReady(true);
  }, []);

  return (
    <motion.div
      variants={animationVariant}
      initial="hidden"
      animate={ready ? "visible" : false}
      viewport={{ once: true, amount: 0.2 }}
      className="w-full relative"
    >
      <header className="relative w-full px-6 py-20 pb-10 pt-40 flex items-start justify-center gap-6 overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ background : "red" }}>
          <img
            src="/images/bg2.jpg"
            sizes="(max-width: 768px) 100vw, 100vw"
            className="w-full h-full object-cover"
            alt="Hero"
          />

          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Header Content */}
        <div className="relative z-10 flex flex-col items-center gap-4 w-full">
          <motion.div
            className="flex flex-col items-center justify-center w-full gap-10"
            variants={textContainer}
            initial="hidden"
            animate={ready ? "visible" : false}
            style={{
              fontFamily : "var(--font-Cinzel)"
            }}
          >
            <motion.span
              className="text-5xl md:text-7xl lg:text-7xl text-center text-white"
              variants={textVariant}
            >
              Experience The Night
            </motion.span>

            <motion.span
              className="text-3xl md:text-5xl lg:text-5xl text-center text-white"
              variants={textVariant}
            >
              Explore our Signature Offerings
            </motion.span>
          </motion.div>
        </div>
      </header>
    </motion.div>
  );
};

export default Hero;
