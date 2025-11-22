// ...existing code...
"use client"
import Link from "next/link";
import CarouselContainer from "../components/Carousel/CarouselContainer";
import NewBrewsSection from "../components/NewBrewsComp/NewBrewsSection";
import DealsPanel from "../components/Deals/DealsPanel";
import Section from "../components/Section";
import Footer from "../components/Footer/Footer";
import { Variants } from "motion";
import HomePage from "../components/Home/HomePage";
import HorizontalCarousel from "../components/Carousel/HorizontalCarousel";
import Hero from "../components/Home/Hero";
import {motion} from 'framer-motion';
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Home() {
  return (
    <div className="home w-full min-h-screen bg-gradient-to-b from-neutral-900 via-gray-900 to-black text-gray-100 flex flex-col items-center">

      {/* Animate Hero */}
      <motion.div
        variants={fadeInDown}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full"
      >
        <Hero />
      </motion.div>
          
      {/* Animate Horizontal Carousel */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full flex items-center justify-center"
      >
        <HorizontalCarousel data={coffeeProducts} />
      </motion.div>

      {/* Main content */}
      <main className="w-full max-w-6xl px-6 py-12 flex flex-col gap-16">
        <h1 className="" style={{ 
          color : "var(--color-coffee-medium)",
          fontSize : "4rem",
          margin : "0",
          fontFamily : "var(--font-Cinzel)",
          alignSelf  :"center"
         }}>SPECIALS</h1>
        {/* Optional Carousel */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <CarouselContainer />
        </motion.section>

        {/* Deals Panel */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <DealsPanel />
        </motion.section>

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
  );
}