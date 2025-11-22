"use client"
import React from 'react'
import { motion } from "framer-motion";

const textContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // delay between each child
    },
  },
};

const textVariant = {
  hidden: { opacity: 0, filter: "blur(4px)", y: 20 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};



const Hero  = ({  }) => {



  return (
      <header className="w-full px-6 py-20 pb-10 pt-40 flex items-start justify-center gap-6 hero"
        style={{ 
        fontFamily: "var(--font-Cinzel), serif", 
        backgroundSize : "120%",
        backgroundImage:"linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/images/heropage.jpg')",
        backgroundBlendMode: "darken",
        }}>

        <div className="flex flex-col items-center gap-4">
          <motion.div
            className="flex flex-col items-center justify-center w-full gap-10"
            variants={textContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              className="text-5xl md:text-7xl lg:text-7xl text-center"
              variants={textVariant}
            >
              Experience The Night
            </motion.span>

            <motion.span
              className="text-3xl md:text-5xl lg:text-5xl text-center"
              variants={textVariant}
            >
              Explore our Signature Offerings
            </motion.span>
          </motion.div>
        </div>
      </header>
  )
}

export default Hero