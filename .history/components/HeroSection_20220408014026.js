import React from 'react'
import Image from 'next/image'
import rocket from '../public/images/rocket.png'
import machine from '../public/images/machine.png'
import cursor from '../public/images/cursor.png'
import down from '../public/images/down.png'
function HeroSection() {
  return (
    <div className=" grid  h-screen grid-cols-2 bg-white">
      <div className=" col-start-2 bg-gradient-to-bl from-pink-100 via-white to-transparent md:w-1/2 md:bg-gradient-to-l"></div>
    </div>
  )
}

export default HeroSection
