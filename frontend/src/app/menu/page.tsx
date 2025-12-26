"use client"
import React, { useState } from "react"
import MainMenu from "@/src/components/Menu/MainMenu"
import MenuSideBar from "@/src/components/Menu/MenuSideBar"
import Section from "@/src/components/Section"
import menuData from "@/src/data/menu.json"

const Menu = () => {
  const [filter, setFilter] = useState<string | null>(null)

  return (
    <div className="menu-container w-full relative ">
      <Section
        isAnimated={false}
        style={{
          display: "flex",
          gap: "30px",
          justifyContent: "center",
          paddingTop: "130px",
          paddingBottom : "50px",
          zIndex: "1",
          flexWrap: "wrap", // optional, prevents overflow issues
          // backgroundImage : "url('/images/cave1.jpg')",s
          backgroundSize : "130%",
          backgroundColor : "#ece0d1"
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
