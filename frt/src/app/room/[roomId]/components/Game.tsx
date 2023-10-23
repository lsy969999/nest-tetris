'use client'

import React, { useEffect } from 'react'
import {io} from 'socket.io-client'

const Game = () => {
  
  useEffect(()=>{
    console.log('[Game] useEffect')
    const socket = io('http://localhost:4000', {transports: ['websocket']});
    socket.on('connect', ()=>{
      console.log(`socket is connected`, socket.id)
    })
    return ()=>{
      console.log('[Game] useEffect cleanup')
      socket.disconnect()
    }
  }, [])
  return (
    <div>Game</div>
  )
}

export default Game