"use client"
import React, { useEffect } from 'react'
import ActionButtons, { ActionButtonRef } from './ActionButtons'
import { useRef } from 'react'

const ActionButtonGroup: React.FC = () => {
  const buttonRefs = useRef<ActionButtonRef[] | null[]>([])
  return (
    <div className='action-button-group h-[120px] w-[500px]'>
      <ActionButtons
        ref={(el) => {buttonRefs.current[0] = el}}
        fill="#783D18"
      />
    </div>
  )
}

export default ActionButtonGroup