'use client'

import React, { useEffect, useState } from 'react'
import {io, Socket} from 'socket.io-client'
import GamePad from './GamePad';

const TO_SERVER = 'toServer';
const TO_CLIENT = 'toClient';
const START = 'START';
const END = 'END';
const Game = () => {
  let socket: Socket | undefined;
  useEffect(()=>{
    console.log('[Game] useEffect')
    socket = io('http://localhost:4000', {transports: ['websocket']});
    socket.on('connect', ()=>{
      console.log(`socket is connected`, socket?.id)
      socket?.on(TO_CLIENT, (data)=>{
        // console.log(`data: ${JSON.stringify(data)}`)
        if(data.type === 'TICK'){
          // console.log(data.data.game)
          setTiles(data.data.game)
        }
      })
    })
    return ()=>{
      console.log('[Game] useEffect cleanup')
      socket?.disconnect()
    }
  }, []) 
  const handleStart = () => {
    socket?.emit(TO_SERVER, {type: START})
  }
  const handleEnd = () => {
    socket?.emit(TO_SERVER, {type: END})
  }


  const [tiles, setTiles] = useState(Array.from({length:20}, ()=>Array.from({length: 10}, (_, i)=>i+1)));
  return (
    <div>
      <GamePad socket={socket} tiles={tiles} setTiles={setTiles} ></GamePad>
      <button className='bg-gray-200 mx-1' onClick={handleStart}>START</button>
      <button  className='bg-gray-200 mx-1' onClick={handleEnd}>END</button>
    </div>
  )
}

export default Game