"use client"
import React from 'react'
import '../../app/globals.css'
import ActionButtonGroup from './Buttons/ActionButtonGroup'

const NavBar : React.FC = () => {
  
  return (
    <div className='nav-bar-container bg-amber-50'>
      <nav className='nav-bar'>
        <section className='navigation-section'>
          <ActionButtonGroup />
          
        </section>  
      </nav>
    </div>
  )
}

export default NavBar;