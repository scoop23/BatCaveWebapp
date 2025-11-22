"use client"
import React from "react"
import { motion } from "framer-motion"
import "../../app/globals.css"

interface CategoryProps {
  category: string
  active?: boolean
  onClick?: () => void
}

const CategoryButton: React.FC<CategoryProps> = ({ category, active, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      className={`category-btn flex items-center pl-4 h-12 rounded-lg select-none text-sm font-semibold ${active ? "active" : ""}`}
      initial={false}
      whileHover={{ x: 6 }}
      style={{
        background: active ? "var(--color-coffee-medium)" : "linear-gradient(90deg, rgba(202,167,123,0.09), rgba(202,167,123,0.03))",
        border: "1px solid rgba(202,167,123,0.12)",
        color: active ? "" : "#e6dfd6",
        boxShadow: "0 6px 16px rgba(0,0,0,0.45)",
        transition: "all 160ms ease"
      }}
      aria-pressed={active}
    >
      {category}
    </motion.button>
  )
}

export default CategoryButton