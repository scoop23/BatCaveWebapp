"use client"

import React from 'react'
import Carousel from './Carousel'
import { Variants, motion} from 'framer-motion'

interface CarouseContainerProps {
  isMobile? : boolean
  animationVariant : Variants
}

const CarouselContainer : React.FC<CarouseContainerProps>  = ({ isMobile , animationVariant}) => {
  return (
    <motion.section
      variants={animationVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className={`carousel-container w-full ${isMobile ? "-z-2" : "z-1"}`}>
        <Carousel parentWidth={700}/>
      </div>
    </motion.section>
  )
}

export default CarouselContainer