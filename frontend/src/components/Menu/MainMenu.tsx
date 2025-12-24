"use client"
import React, { useMemo } from "react"
import Image from "next/image"
import menuData from "@/src/data/menu.json"
import { AnimatePresence, motion } from "framer-motion"
import { MenuItem } from "./MenuModal";
import { useState } from "react"

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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

const MainMenu: React.FC<MainMenuProps> = ({ data, filter }) => {
  const [modal, setModal] = useState(false);

  function toggleModal () {
    setModal(!modal);
  }

  const items = data ?? menuData;
  const displayed = useMemo(() => {
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
        <AnimatePresence>
          {displayed.map((p: MenuItem) => (
            <motion.article
              key={p.title} // unique key
              className="coffee-card group"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              layout
              style={{ 
                background: 'linear-gradient(180deg, rgba(18,16,15,0.55), rgba(12,12,12,0.6))', 
                backdropFilter : "blur(10px)",
                borderRadius : "20px"
              }}
            >
              <div className="media relative h-44 w-full overflow-hidden rounded-md">
                {p?.image ? (
                  <Image
                    src={`/images/menufolder/${p.image}`}
                    alt={p.title ?? ""}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                ) : (
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      background: "linear-gradient(90deg,#111,#1b1b1b)",
                    }}
                  />
                )}
                <div className="media-overlay" />
              </div>

              <div className="card-content p-4">
                <h4 className="text-base font-bold text-amber-50">{p.title ?? "Untitled"}</h4>
                <p className="text-xs mt-1 text-gray-300 line-clamp-3">{p.description ?? ""}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="price-pill " style={{ color : "var(--color-text)" }}>{p.price ?? ""}</span>
                  <button className="btn-view">View</button>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
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
