import React from 'react'
import Ready from './Ready'

const UserBox = () => {
  return (
    <div className='bg-gray-50 w-[100px] h-[100px] relative'>
      <div className='flex flex-col'>
        <div className=''>
          
        </div>
        <div className='absolute bottom-0 left-0 right-0 grid place-items-center'>
          <Ready></Ready>
        </div>
      </div>
    </div>
  )
}

export default UserBox