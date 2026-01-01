"use client"
import React, { useMemo } from "react"
import Image from "next/image"
import menuData from "@/src/data/menu.json"
import { AnimatePresence, motion } from "framer-motion"
import MenuModal, { MenuItem } from "./MenuModal";
import { useState } from "react"
import MenuItemCard from "./MenuItemCard"

interface MainMenuProps {
  data?: any[] 
  filter: string | null
}

// Parent variants for stagger
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08, // stagger between each card
    },
  },
}

const cardVariants = {
  hidden: { opacity: 2, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

const MainMenu: React.FC<MainMenuProps> = ({ data, filter }) => {
  const [modal, setModal] = useState(false);
  const [selectedItem , setSelectedItem] = useState<MenuItem | undefined>(undefined);

  function toggleModal (item: MenuItem) {
    setSelectedItem(item);
    setModal(!modal);
    console.log(selectedItem)
    console.log(modal)
  }

  const items = data ?? menuData;
  const displayed = useMemo(() => { // kinda like useEffect but changes the variable 'displayed' in real time based on the deps which is the [] in the 2nd argument of the useMemo callback.
    console.log(filter)
    if (!filter) return items; // if category is nothing default to 'all' category
    return items.filter((i: MenuItem) => capitalize(i.category) === filter);
  }, [items, filter]);

  return (
    <div className="main-menu-panel">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* playing with states */}
        <AnimatePresence mode="popLayout">
          {displayed.map((p: MenuItem) => (
              <MenuItemCard key={p.title} item={p} cardVariants={cardVariants} toggleModal={toggleModal}/>
          ))}
        </AnimatePresence>
      <MenuModal isModalOpen={modal} item={selectedItem} toggleModal={toggleModal}/>
      </motion.div>
      
      <style jsx>{`
        .main-menu-panel { color: #efe9e1; }
        .coffee-card { background: linear-gradient(180deg, rgba(18,16,15,0.55), rgba(12,12,12,0.6));
          border: 1px solid rgba(202,167,123,0.06);
          border-radius: 12px;
          overflow:hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.6);
          transition: transform 0.18s ease, box-shadow 0.18s ease;
        }
        .coffee-card:hover { transform: translateY(-6px); box-shadow: 0 20px 50px rgba(0,0,0,0.7); }
        .media-overlay { position:absolute; inset:0; background: linear-gradient(180deg, rgba(0,0,0,0.0), rgba(0,0,0,0.45)); transition: background 0.18s; }
        .group:hover .media-overlay { background: linear-gradient(180deg, rgba(0,0,0,0.0), rgba(0,0,0,0.6)); }
        .card-content { padding-bottom: 16px; }
        .price-pill { background: var(--color-coffee-medium); color: var(--color-coffee-medium); padding:6px 10px; border-radius:8px; font-weight:700; font-size:13px; }
        .btn-view { background: var(--color-coffee-medium); color: var(--color-text); padding:6px 10px; border-radius:8px; font-weight:600; }
        @media (max-width: 640px){ .media{ height: 160px; } }
      `}</style>
    </div>
  )
}

function capitalize(s?: string) {
  if (!s) return ""
  return s.replace(/\b\w/g, (l) => l.toUpperCase())
}

export default MainMenu;
