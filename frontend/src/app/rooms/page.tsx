"use client"
import React from 'react'
import AvailableRooms from '../../components/Rooms/AvailableRooms'

const Rooms = () => {
  return (
    <div className="p-6 mt-35" style={{
            backgroundImage : "url('images/bg2.jpg')"
          }}>
      <AvailableRooms />
    </div>
  )
}

export default Rooms