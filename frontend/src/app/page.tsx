// ...existing code...
"use client"
import Link from "next/link";
import NewBrewsSection from "../components/NewBrewsComp/NewBrewsSection";
import DealsPanel from "../components/Deals/DealsPanel";
import Section from "../components/Section";
import Footer from "../components/Footer/Footer";
import { easeInOut, Variants } from "framer-motion";
import HomePage from "../components/Home/HomePage";
import Hero from "../components/Home/Hero";
import {motion} from 'framer-motion';
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const HorizontalCarousel = dynamic(
  () => import("../components/Carousel/HorizontalCarousel"),
  { ssr : false }
)

const CarouselContainer = dynamic(
  () => import("../components/Carousel/CarouselContainer"),
  {ssr : false}
)


   //  animation variants
 const animationVariant : Variants = {
    hidden : {
      y : -200, opacity : 0
    },
    scrollView : {
      y : 0, opacity : 1,
      transition : { duration : 0.8 , ease : "easeInOut" }
    }
  }

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  }


export interface PastryProducts {
  cover : string
  description : string
  value : number
}

const coffeeProducts: PastryProducts[] = [
  { cover: "image21.png", description: "Red Velvet Muffin", value: 150 },
  { cover: "image47.png", description: "Dark Canopy Cake", value: 180 },
  { cover: "image23.png", description: "Cave Dweller", value: 170 },
  { cover: "image48.png", description: "Chocolate Cupcakes", value: 200 },
  { cover: "image50.png", description: "Black Velvet Cake", value: 160 },
];


const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut"} },
};

const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut"} },
};

export default function Home() {

  return (
    <motion.main
    variants={container}
    initial={"hidden"}
    animate={"visible"}
    >                           
      <div className="home w-full min-h-screen bg-gradient-to-t from-gray-800/90 via-gray-900/90 to-black text-gray-100 flex flex-col items-center">

        {/* Animate Hero */}
        
        <Hero animationVariant={fadeInDown}/>
        
        {/* Animate Horizontal Carousel */}
        <HorizontalCarousel data={coffeeProducts} animationVariant={fadeInUp}/>

        {/* Main content */}
        <main className="w-full max-w-6xl px-6 py-12 flex flex-col gap-3">

          <motion.div 
          initial={{ opacity : 0  }}
          animate={{ opacity : 1 }}
          transition={{ duration : 1 , ease : "easeInOut", delay : 1 }}
          style={{ 
            color : "var(--color-coffee-medium)",
            fontSize : "4rem",
            margin : "0",
            fontFamily : "var(--font-Cinzel)",
            alignSelf  :"center"
          }}>
          <h1>SPECIALS</h1>
          </motion.div>
          {/* Optional Carousel */}
          
          <CarouselContainer animationVariant={fadeInUp}/>

          <DealsPanel />
          

          {/* New Brews / Featured */}
          <motion.section
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            style={{
              fontFamily: "var(--font-Cinzel)",
              alignItems: "center",
              gap: "60px",
              color: "var(--text-color, #e6e6e6)",
            }}
            className="mask-div flex flex-col items-center"
          >
            <NewBrewsSection />

            <Link
              href={"/menu"}
              className="text-[28px] md:text-[32px] inline-block"
              style={{ color: "var(--color-coffee-medium, #caa77b)" }}
            >
              See all Drinks
            </Link>
          </motion.section>
        </main>
      </div>
    </motion.main>
  );
}