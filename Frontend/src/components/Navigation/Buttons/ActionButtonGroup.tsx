"use client"
import React, { useEffect } from 'react'
import ActionButton, { ActionButtonRef } from './ActionButton'
import { useRef } from 'react'

const ActionButtonGroup = () => {
  const myref = useRef<ActionButtonRef>(null)
  const svgRefsArray = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    if(myref) {
      console.log(myref.current);
    }
  }, [])

  return (
    <div className='action-button-group h-[200px]'>
      
      <ActionButton className='' fill='#783D18' ref={myref} />
    </div>
  )
}

export default ActionButtonGroup