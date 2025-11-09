"use client"
import React from 'react'
import '../../app/globals.css'
import ActionButtonGroup from './Buttons/ActionButtonGroup'
import Image from 'next/image'
import brandImage from '../../../public/icons/brandIcon.png'


const NavBar : React.FC = () => {
  
  return (
    <div className='nav-bar-container bg-[#944f23] flex justify-center p-4'>
      <nav className='nav-bar bg-[#935935] max-w-[1500px] w-full rounded-[30px] shadow-2xl'>
        <section className='navigation-section flex justify-between px-25 py-4'>
          <div className={`logo flex items-center gap-10 font-extrabold text-[23px]`}>
            <div className='bg-[#754b31] rounded-[100px] shadow-[var(--shadow-custom)]'>
              <Image src={brandImage} alt="BatCaveLogo" width={190} height={190}/>
            </div>
            <div className={`text-[35px]`}>
              Cave Café.
            </div>
          </div>
          <ActionButtonGroup />
        </section>  
      </nav>
    </div>
  )
}

export default NavBar;