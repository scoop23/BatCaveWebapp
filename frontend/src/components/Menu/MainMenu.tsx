"use client"
import React from 'react'
import MenuCard, { MenuCardProps } from './MenuCard'
import { getImagePath } from '../Carousel/ImageGallery'
import '../../app/globals.css'
import 'simplebar-react/dist/simplebar.min.css';
import SimpleBar from 'simplebar-react';

interface MainMenuProps {
  data : MenuCardProps[]
}

const MainMenu : React.FC<MainMenuProps> = ({ data }) => {
  console.log(data[0].cover)
  return (
    <div className='menu max-w-[1300px] w-full mx-auto'>
      <SimpleBar
        style={{ backdropFilter: "blur(10px)", borderRadius: "20px", border: "2px solid #783D18" }}
        autoHide={true}
        className="relative w-full max-w-[1200px] h-[750px]"
      >
        {/* Put grid INSIDE this wrapper, not on the SimpleBar itself */}
        <section
          className="    menu-container relative 
    grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 
    p-7 gap-4 place-items-center
    md:h-[650px]   /* height only on md+ */
"
          style={{ borderRadius: "20px" }}
        >
          {data.map((d, i) => {
            const coverPath = getImagePath(d.cover)
            return (
              <MenuCard 
                key={i}
                cover={coverPath}
                description={d.description}
                value={d.value}
              />
            )
          })}
        </section>
      </SimpleBar>

    </div>
  )
}

export default MainMenu