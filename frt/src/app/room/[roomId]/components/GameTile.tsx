import React from 'react'

interface GameTileParam {
  tiles: any
}

const GameTile = ({tiles}: GameTileParam) => {
  const size = 50;
  const colorIdx = tiles[3];
  let color = '';
  if(colorIdx === 0){
    color = 'bg-white'
  } else if (colorIdx === 1){
    color = 'bg-yellow-500'
  } else if (colorIdx === 2){
    color = 'bg-sky-500'
  } else if (colorIdx === 3){
    color = 'bg-blue-500'
  } else if (colorIdx === 4){
    color = 'bg-orange-500'
  } else if (colorIdx === 5){
    color = 'bg-red-500'
  } else if (colorIdx === 6){
    color = 'bg-green-500'
  } else if (colorIdx === 7){
    color = 'bg-purple-500'
  }
  
  return (
    <div
    className={`
              ${color}
              w-[30px]
              h-[30px]
              border
              border-black`}>
      
    </div>
  )
}

export default GameTile