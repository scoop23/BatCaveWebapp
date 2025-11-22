"use client"
import React, { useState } from "react"
import MainMenu from "@/src/components/Menu/MainMenu"
import MenuSideBar from "@/src/components/Menu/MenuSideBar"
import Section from "@/src/components/Section"
import menuData from "@/src/data/menu.json"

const Menu = () => {
  const [filter, setFilter] = useState<string | null>(null)

  return (
    <div className="menu-container w-full relative mt-[80px]">
      <Section
        isAnimated={false}
        style={{
          display: "flex",
          gap: "30px",
          justifyContent: "center",
          marginTop: "15px",
          padding: "20px",
          zIndex: "1",
          paddingTop: "40px",
          flexWrap: "wrap", // optional, prevents overflow issues
          backgroundImage : "url('/images/cave1.jpg')",
          backgroundSize : "130%"
        }}
        className="menu-inner-container md:flex-row"
      >
        <div className="menu-sidebar h-full flex-shrink-0">
          <MenuSideBar setFilter={setFilter} initial={undefined} />
        </div>

        <div className="main-menu w-full max-w-[960px] flex-shrink-0">
          <MainMenu data={menuData} filter={filter} />
        </div>
      </Section>

    </div>
  )
}

export default Menu
