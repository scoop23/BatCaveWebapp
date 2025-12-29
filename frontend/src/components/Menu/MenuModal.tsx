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
  console.log(item);

  return createPortal(
    <AnimatePresence>
    {isModalOpen && item && (
      <motion.div
      className='overlay-modal fixed inset-0 z-50 flex items-center justify-center bg-black/60'
      initial={{ opacity : 0 }}
      animate={{ opacity : 1 }}
      exit={{ opacity : 0 }}
      >
        <motion.div
        className='outer-modal-container'
        >
          <motion.div
          className='inner-modal-container'>

          </motion.div>
        </motion.div>
      </motion.div>
    )}
    </AnimatePresence>
    ,
     document.body
  )
}

export default MenuModal