import React from 'react'
import { motion , AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import Image from 'next/image';

export interface MenuItem {
  category : string
  title : string
  description : string
  price : string
  image : string
}

interface MenuModalProps {
  item : MenuItem | undefined
  isModalOpen : boolean
  toggleModal : (item : MenuItem) => void
}

const MenuModal : React.FC<MenuModalProps> = ({ item, isModalOpen, toggleModal}) => {
  if (typeof window === "undefined") return null;
  console.log(item)
  return createPortal(
    <AnimatePresence>
    {isModalOpen && item && (
      <motion.div
      className='overlay-modal fixed inset-0 z-50 flex items-center justify-center bg-black/60'
      initial={{ opacity : 0 }}
      animate={{ opacity : 1 }}
      exit={{ opacity : 0 }}
      onClick={() => toggleModal(item)}
      >
        <motion.div
        initial={{ opacity : 0, scale : 0.85 }}
        animate={{ opacity : 1, scale : 1 }}
        transition={{ ease : "easeInOut", duration : 0.5 }}
        exit={{ opacity : 0, scale : 0.85}}
        className='outer-modal-container border border-white bg-white/20 h-3/5 w-3/6  flex items-center justify-center backdrop-blur-xs'
        >
          <motion.div
            className="
              inner-modal-container
              grid grid-cols-1 md:grid-cols-2
              w-full h-full
              rounded-xl overflow-hidden
            "
          >
            <div className="relative w-full h-full p-4 flex items-center justify-center">
              <Image
                src={`/images/menufolder/${item.image}`}
                alt={`${item.title}-Image`}
                sizes="
                  (max-width: 768px) 20vw,
                  20vw
                "
                width={300}
                height={300}
                className="object-cover "
              />
            </div>

            <div className="flex flex-col justify-between p-6 text-white">
              <h2 className="text-xl font-bold">
                {item.title}
              </h2>

              <p className="mt-4 text-sm text-white/80">
                {item.description}
              </p>

              <motion.div className='action-btns-with-price p-4 border border-white flex justify-between items-center'>
                <span className="text-lg font-semibold">
                  {item.price}
                </span>
                <button className='buy-now-btn p-2'>
                  Buy Now
                </button>
              </motion.div>
            </div>
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