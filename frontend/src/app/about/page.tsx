'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Variants } from 'framer-motion'

const About = () => {

const itemVariant: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      type: "spring", // literal type is fine now
      stiffness: 120, 
      damping: 20 
    }
  }
};

const containerVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 }
  }
};

  return (
    <div className="w-full bg-[var(--color-about)] to-white mt-40">
      {/* Hero Section */}
      <motion.section 
        className="max-w-6xl mx-auto px-4 py-20 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariant}
      >
        <motion.h1 
          className="text-5xl md:text-6xl font-bold mb-6"
          style={{ color: 'var(--color-text)' }}
          variants={itemVariant}
        >
          About Bat Cave
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-600 max-w-3xl mx-auto"
          variants={itemVariant}
        >
          Your ultimate destination for premium coffee, delectable pastries, and unforgettable moments
        </motion.p>
      </motion.section>

      {/* Story Section */}
      <motion.section 
        className="max-w-6xl mx-auto px-4 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariant}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariant}>
            <h2 className="text-4xl font-bold mb-6" style={{ color: 'var(--color-text)' }}>
              Our Story
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Founded with a passion for exceptional coffee and community connection, Bat Cave Cafe has become a beloved sanctuary for coffee enthusiasts and friends alike. What started as a small vision has grown into a thriving establishment where quality meets comfort.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Every cup served and every moment shared within our walls reflects our commitment to excellence and creating meaningful experiences for our customers.
            </p>
          </motion.div>
          <motion.div
              className="relative h-96 rounded-lg overflow-hidden shadow-lg"
              variants={itemVariant}
            >
              {/* Video background */}
              <video
                className="w-full h-full object-cover rounded-lg"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/videos/backgroundVideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Overlay text */}
              <div
                className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold"
                style={{
                  background: 'rgba(0,0,0,0.3)', // optional overlay for readability
                }}
              >
                Bat Cave Cafe Environment
              </div>
            </motion.div>
        </div>
      </motion.section>

      {/* Mission & Vision Section */}
      <motion.section 
        className="max-w-6xl mx-auto px-4 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariant}
      >
        <motion.h2 
          className="text-4xl font-bold text-center mb-16"
          style={{ color: 'var(--color-text)' }}
          variants={itemVariant}
        >
          Our Mission & Vision
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <motion.div
            className="p-8 rounded-lg shadow-lg"
            style={{ background: 'var(--color-accent)', color: 'var(--color-coffee-dark)' }}
            variants={itemVariant}
            whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
          >
            <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
              <span className="text-4xl">🎯</span> Mission
            </h3>
            <p className="text-lg leading-relaxed font-medium">
              To offer a comfortable, inspiring space where students and friends can enjoy great coffee, delicious food, and a peaceful refuge—whether for studying, collaborating, or unwinding.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            className="p-8 rounded-lg shadow-lg"
            style={{ background: 'var(--color-coffee-medium)', color: 'white' }}
            variants={itemVariant}
            whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
          >
            <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
              <span className="text-4xl">✨</span> Vision
            </h3>
            <p className="text-lg leading-relaxed font-medium">
              To be Malvar’s go-to late-night café and study haven; a place students trust for excellent service, tasty drinks, and a warm welcome every time.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section 
        className="max-w-6xl mx-auto px-4 py-20 bg-[var(--color-core)] rounded-lg my-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariant}
      >
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          style={{ color: 'var(--color-text)' }}
          variants={itemVariant}
        >
          Our Core Values
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 " >
          {[
            { icon: '☕', title: 'Quality', description: 'Premium ingredients and exceptional craftsmanship in everything we do' },
            { icon: '❤️', title: 'Community', description: 'Creating a warm space where everyone feels welcome and valued' },
            { icon: '🌱', title: 'Sustainability', description: 'Responsible sourcing and environmentally conscious practices' },
            { icon: '🎨', title: 'Creativity', description: 'Innovative flavors and unique experiences that delight our customers' },
            { icon: '⭐', title: 'Excellence', description: 'Striving for perfection in service, taste, and overall experience' },
            { icon: '🤝', title: 'Integrity', description: 'Honest, transparent, and ethical in all our dealings' }
          ].map((value, idx) => (
            <motion.div
              key={idx}
              className="text-center p-6"
              variants={itemVariant}
              whileHover={{ scale: 1.05 }}
              style={{ color : "var(--color-core-text)" }}
            >
              <div className="text-5xl mb-4">{value.icon}</div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--color-text)' }}>
                {value.title}
              </h3>
              <p className="text-[var(--color-text)]">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="max-w-6xl mx-auto px-4 py-16 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariant}
      >
        <motion.h2 
          className="text-3xl font-bold mb-6"
          style={{ color: 'var(--color-text)' }}
          variants={itemVariant}
        >
          Experience the Bat Cave Difference
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
          variants={itemVariant}
        >
          Visit us today and discover why we&apos;re more than just a cafe—we&apos;re a community gathering place where memories are brewed fresh every day.
        </motion.p>
        <motion.a
          href="/rooms"
          className="inline-block px-8 py-4 rounded-lg text-white font-bold text-lg"
          style={{ background: 'linear-gradient(135deg, #D97706, #F59E0B)' }}
          variants={itemVariant}
          whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(217, 119, 6, 0.3)' }}
        >
          Reserve Your Space
        </motion.a>
      </motion.section>
    </div>
  )
}

export default About