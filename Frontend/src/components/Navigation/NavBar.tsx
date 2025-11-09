"use client"
import React from 'react'
import '../../app/globals.css'
import ActionButtonGroup from './Buttons/ActionButtonGroup'

const NavBar : React.FC = () => {
  
  return (
    <div className='nav-bar-container bg-amber-50'>
      <nav className='nav-bar w-full'>
        <section className='navigation-section flex p-10 px-10 gap-[800px]'>
          <div className='w-2xs'>hello</div>
          <ActionButtonGroup />
        </section>  
      </nav>
    </div>
  )
}

export default NavBar;