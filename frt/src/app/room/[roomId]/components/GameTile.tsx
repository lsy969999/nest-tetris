import React from 'react'

interface GameTileParam {
  color: string
}

const GameTile = ({color}: GameTileParam) => {
  const size = 10;
  return (
    <div
    className={`
              w-[${size}px]
              h-[${size}px]
              bg-${color}-500
              border
              border-black`}>
      
    </div>
  )
}

export default GameTile