import BackBtn from '@/components/BackBtn'
import Link from 'next/link'
import React from 'react'

const Room = () => {
  return (
    <div>
      <BackBtn></BackBtn>
        <ul>
            <li>
                <Link href={"/room/1"}>1</Link>
            </li>
        </ul>
    </div>
  )
}

export default Room