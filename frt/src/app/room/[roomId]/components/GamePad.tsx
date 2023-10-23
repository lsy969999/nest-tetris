'use client'

import { space } from 'postcss/lib/list';
import React, { useEffect } from 'react'
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
const SPACE = 'SPACE';

interface GamePadParam {
  socket: Socket | undefined
}

const GamePad = ({socket}: GamePadParam) => {
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
  }, [])

  const down = () => {
    console.log('down');
  }

  const up = () => {
    console.log('up');
  }

  const left = () => {
    console.log('left');
  }

  const right = () => {
    console.log('right');
  }

  const space = () => {
    console.log('space')
  }

  return (
    <div>
      <div className='flex flex-col'>
        {
        Array.from({length:20}, ()=>Array.from({length: 10}, (_, i)=>i+1))
          .map(p=>{
            return (
              <div className='flex'>
                {p.map(p2=>{
                        return (<GameTile color='red'></GameTile>)      
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