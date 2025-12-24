import React from 'react'
import { motion , AnimatePresence } from 'framer-motion';

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
}

const MenuModal : React.FC<MenuModalProps> = ({ item, isModalOpen }) => {
  console.log(item)
  return (
    <motion.div>
      hey
    </motion.div>
  )
}

export default MenuModal