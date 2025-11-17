"use client"
import React from 'react'
import '../../app/globals.css'
import ActionButtonGroup from './Buttons/ActionButtonGroup'
import Image from 'next/image'
import brandImage from '../../../public/icons/brandIcon.png'
import { useEffect } from 'react'


const NavBar : React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // empty dependency array = run once on mount
  return (
    <div className='nav-bar-container flex justify-center'>
      <nav className='nav-bar max-w-[1500px] w-full rounded-[100px] z-1 mt-1.5'>
        <section className='navigation-section flex h-[160px] justify-between px-20 py-4 pb-5'>
          <div className={`logo flex w-full max-w-[500px] items-center gap-10 font-extrabold text-[23px]`}>
            <div className='rounded-[100px] shadow-[var(--shadow-custom)]'
            style={{ backgroundColor : "var(--color-coffee-medium)" }}>
              <Image src={brandImage} alt="BatCaveLogo" width={120} height={120}/>
            </div>
            <div className={`text-[35px]`}>
              Bat Cave Café.
            </div>
          </div>
          <ActionButtonGroup />
        </section>  
      </nav>
    </div>
  )
}

export default NavBar;