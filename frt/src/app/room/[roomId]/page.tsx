import React from 'react'
import UserBox from './components/UserBox'
import Game from './components/Game'
import BackBtn from '@/components/BackBtn'

const RoomDetail = () => {
  return (
    <div>
        <BackBtn></BackBtn>
        <UserBox></UserBox>
        <Game></Game>
    </div>
  )
}

export default RoomDetail