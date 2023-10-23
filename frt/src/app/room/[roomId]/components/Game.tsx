'use client'

import React, { useEffect } from 'react'
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
        console.log(`data: ${JSON.stringify(data)}`)
      })
    })
    return ()=>{
      console.log('[Game] useEffect cleanup')
      socket?.disconnect()
    }
  },)
  const handleStart = () => {
    socket?.emit(TO_SERVER, {type: START})
  }
  const handleEnd = () => {
    socket?.emit(TO_SERVER, {type: END})
  }
  return (
    <div>
      <GamePad socket={socket}></GamePad>
      <button onClick={handleStart}>START</button>
      <button onClick={handleEnd}>END</button>
    </div>
  )
}

export default Game