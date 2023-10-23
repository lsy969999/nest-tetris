'use client'

import { useRouter } from 'next/navigation'
import React from 'react'


const BackBtn = () => {
  const router = useRouter()
  console.log(router)
  
  return (
    <button onClick={()=>router.back()}>
      BACK
    </button>
  )
  
}

export default BackBtn