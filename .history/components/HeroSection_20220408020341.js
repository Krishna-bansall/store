import React from 'react'
import Image from 'next/image'
import rocket from '../public/images/rocket.png'
import machine from '../public/images/machine.png'
import cursor from '../public/images/cursor.png'
import down from '../public/images/down.png'
function HeroSection() {
  return (
    <div className="relative grid h-screen grid-cols-2 bg-white">
      <div className="z-10 col-span-2  grid grid-cols-[2fr_1fr] px-4 md:px-20">
        <div className="col-span-1 items-center">da</div>
      </div>
      <div
        className="absolute col-start-2 h-full w-full bg-gradient-to-bl from-pink-100
         via-white to-transparent md:bg-gradient-to-l"
      ></div>
    </div>
  )
}

export default HeroSection
