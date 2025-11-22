"use client"
import React, { useState, useMemo } from "react"
import CategoryButton from "./CategoryButton"
import menuData from "@/src/components/menu.json"

interface MenuSideBarProps {
  onSelect?: (category: string) => void
  initial?: string
}

const MenuSideBar: React.FC<MenuSideBarProps> = ({ onSelect, initial }) => {
  const categories = useMemo(() => {
    const set = new Set<string>()
    menuData.forEach((i: any) => {
      if (i && typeof i.category === "string" && i.category.trim().length > 0) {
        set.add(capitalize(i.category))
      }
    })
    return Array.from(set)
  }, [])
  console.log("Derived categories:", categories)
  const [active, setActive] = useState<string>(initial ?? (categories[0] ?? "All"))

  function handleClick(cat: string) {
    setActive(cat)
    onSelect?.(cat)
  }

  return (
    <aside className="menu-sidebar flex flex-col gap-3 w-44">
      <h3 className="text-sm text-gray-200 font-semibold mb-2" style={{ fontFamily: "var(--font-Cinzel)" }}>Categories</h3>
      <div className="flex flex-col gap-2">
        {categories.length === 0 ? (
          <div className="text-sm text">No categories</div>
        ) : (
          categories.map((c) => (
            <CategoryButton key={c} category={c} active={c === active} onClick={() => handleClick(c)} />
          ))
        )}
      </div>
    </aside>
  )
}

function capitalize(s?: string) {
  if (!s || typeof s !== "string") return ""
  return s.replace(/\b\w/g, (l) => l.toUpperCase())
}

export default MenuSideBar