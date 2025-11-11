"use client"
import React from 'react'
import CategoryButton from './CategoryButton'

export const dummyCategories = [ "Specialty Coffees" , "Pastries" , "Snacks" ]

interface SideBarProps {
  categories : string[]
}

const MenuSideBar : React.FC<SideBarProps> = ({ categories }) => {
  return (
    <div className='categories w-full'>
      <section className='w-[300px] h-[630px]' style={{ backgroundColor : "var(--color-coffee-dark)", borderRadius : "20px", boxShadow : "var(--shadow-custom)" }}> 
        <div className='cat-buttons flex flex-col p-4 pt-8 items-center gap-4'>
          {/* <CategoryButton /> */}
          {
            categories.map((c , i) => (
              <CategoryButton key={i} category={c}/>
            ))
          }
        </div>
      </section>
    </div>
  )
}

export default MenuSideBar