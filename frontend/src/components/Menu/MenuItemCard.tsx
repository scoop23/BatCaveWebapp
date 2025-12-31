import React from 'react'
import { motion, Variants } from 'framer-motion';
import { MenuItem } from './MenuModal';
import Image from 'next/image';

type MenuItemCardProp = {
  item : MenuItem
  cardVariants : Variants
  toggleModal : () => void
}

const MenuItemCard = ({ item , cardVariants, toggleModal} : MenuItemCardProp) => {
  return (
    <motion.article
      layout
      key={item.title} // unique key
      className="coffee-card group flex flex-col "
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{ 
        background: 'linear-gradient(180deg, rgba(18,16,15,0.55), rgba(12,12,12,0.6))', 
        backdropFilter : "blur(10px)",
        borderRadius : "10px",
        boxShadow : "5px 5px 5px 0px rgba(0,0,0,0.3)",
        height : "100%",
      }}
    >
      <div className="media relative h-44 w-full overflow-hidden border-2 border-medium" style={{
        borderTopLeftRadius : "12px",
        borderTopRightRadius : "12px",
      }}>
        {item?.image ? (
          <Image
            src={`/images/menufolder/${item.image}`}
            alt={item.title ?? ""}
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

      <div className="card-content p-4 flex flex-col flex-1 " style={{
        transition : "all 160ms ease",
        borderBottomRightRadius : "12px",
        borderBottomLeftRadius : "12px",
        backgroundColor : "var(--color-coffee-medium)"
        }}>
        <h4 className="text-base font-bold text-(--color-text)">{item.title ?? "Untitled"}</h4>
        <p className="text-xs mt-1 line-clamp-3 text-(--color-text)">{item.description ?? ""}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="price-pill " style={{ color : "var(--color-text)" }}>{item.price ?? ""}</span>
          <button className="btn-view cursor-pointer text-(--color-text)" onClick={() => toggleModal()}>View</button>
        </div>
      </div>
    </motion.article>
  )
}

export default MenuItemCard