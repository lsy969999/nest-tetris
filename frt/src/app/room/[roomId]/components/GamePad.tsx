'use client'

import React, { useEffect, useState } from 'react'
import GameTile from './GameTile';
import {Socket} from 'socket.io-client'
const ArrowUp = 'ArrowUp';
const ArrowLeft = 'ArrowLeft';
const ArrowRight = 'ArrowRight';
const ArrowDown = 'ArrowDown';
const Space = 'Space';
const LEFT = 'LEFT';
const RIGHT = 'RIGHT';
const UP = 'UP';
const DOWN = 'DOWN';
const BELOW = 'BELOW';
const TO_SERVER = 'toServer';

interface GamePadParam {
  socket: Socket | undefined,
  tiles: any[][],
  setTiles: any,
  boardUid: string,
}

const GamePad = ({socket, tiles, setTiles, boardUid}: GamePadParam) => {
  useEffect(()=>{
    console.log('[GamePad] useEffect')
    const keydownLister = (e: KeyboardEvent) => {
      if (e.code === ArrowDown) {
        down()
      } else if (e.code === ArrowUp) {
        up()
      } else if (e.code === ArrowLeft) {
        left()
      } else if (e.code === ArrowRight) {
        right()
      } else if (e.code === Space) {
        space()
      } else {
        console.log('no key')
      }
    }
    window.addEventListener('keydown', keydownLister)
    return ()=>{
      window.removeEventListener('keydown', keydownLister);
    }
  }, )

  const down = () => {
    const type = DOWN
    socket?.emit(TO_SERVER, {type, data: {boardUid}})
    console.log('down');
  }

  const up = () => {
    const type = UP
    socket?.emit(TO_SERVER, {type, data: {boardUid}})
    console.log('up');
  }

  const left = () => {
    const type = LEFT
    socket?.emit(TO_SERVER, {type, data: {boardUid}})
    console.log('left');
  }

  const right = () => {
    const type = RIGHT
    socket?.emit(TO_SERVER, {type, data: {boardUid}})
    console.log('right');
  }

  const space = () => {
    const type = BELOW
    socket?.emit(TO_SERVER, {type, data: {boardUid}})
    console.log('space')
  }

  return (
    <div>
      <div className='flex flex-col'>
        {
          tiles.map((p, i)=>{
            return (
              <div key={i} className='flex'>
                {p.map((p2, i2)=>{
                        // console.log(p2)
                        return (<GameTile key={`${i}_${i2}`} tiles={p2}></GameTile>)      
                      })
                }
              </div>
            )
          })
        }
        
      </div>
    </div>
  )
}

export default GamePad