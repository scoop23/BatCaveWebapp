import React from 'react'
import { motion , AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';

export interface MenuItem {
  category : string
  title : string
  description : string
  price : string
  image : string
}

interface MenuModalProps {
  item : MenuItem
  isModalOpen : boolean
  toggleModal : () => void
}

const MenuModal : React.FC<MenuModalProps> = ({ item, isModalOpen }) => {
  if (typeof window === "undefined") return null;


  return createPortal(
    <AnimatePresence>
    {isModalOpen && item && (
      <motion.div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/60'>
      
      </motion.div>
    )}
    </AnimatePresence>
    ,
     document.body
  )
}

export default MenuModal