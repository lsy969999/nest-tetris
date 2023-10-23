'use client'
import React, { useState } from 'react'

const Ready = () => {
  const [ready, setReady] = useState(false)
  const handleReady = () =>{
    setReady(prev=>!prev);
  }
  return (
    <button 
      className='text-center'
      onClick={handleReady}>
      {ready ? 'UNREADY' : 'READY'}
    </button>
  )
}

export default Ready