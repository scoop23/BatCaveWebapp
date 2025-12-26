"use client"
import React, { useState, useMemo } from "react"
import CategoryButton from "./CategoryButton"
import menuData from "@/src/data/menu.json"

interface MenuSideBarProps {
  setFilter: (cat: string | null) => void
  onSelect?: (category: string) => void
  initial?: string
}

const MenuSideBar: React.FC<MenuSideBarProps> = ({ onSelect, initial, setFilter }) => {
  const categories = useMemo(() => {
    const set = new Set<string>()
    menuData.forEach((i: any) => {
      if (i?.category?.trim()) set.add(capitalize(i.category))
    })
    return Array.from(set)
  }, [])

  const [active, setActive] = useState<string>(initial ?? "All")

  function handleClick(cat: string | null) {
    setFilter(cat)
    setActive(cat ?? "All")
    onSelect?.(cat ?? "")
  }

  return (
    <aside className="menu-sidebar flex flex-col gap-3 w-44">
      <h3 className="text-sm text-gray-600 font-semibold mb-2" style={{ fontFamily: "var(--font-Cinzel)" }}>Categories</h3>
      <div className="flex flex-col gap-2">
        {/* All category button */}
        <CategoryButton
          key="All"
          category="All"
          active={active === "All"}
          onClick={() => handleClick(null)}
        />
        {categories.map((c) => (
          <CategoryButton
            key={c}
            category={c}
            active={c === active}
            onClick={() => handleClick(c)}
          />
        ))}
      </div>
    </aside>
  )
}

function capitalize(s?: string) {
  if (!s) return ""
  return s.replace(/\b\w/g, (l) => l.toUpperCase())
}

export default MenuSideBar
