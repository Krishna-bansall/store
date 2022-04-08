import React from 'react'
import Image from 'next/image'
import rocket from '../public/images/rocket.png'
import machine from '../public/images/machine.png'
import cursor from '../public/images/cursor.png'
import down from '../public/images/down.png'
function HeroSection() {
  return (
    <div className="relative grid h-screen grid-cols-2 bg-white">
      <div
        className="z-10 col-span-2 grid max-h-screen grid-cols-[1fr_3fr_1fr] grid-rows-[3fr_2fr_3fr] 
      px-4 md:grid-cols-[2fr_1fr] md:grid-rows-[1fr_2fr_2fr] md:px-20 md:py-20"
      >
        <div className="col-start-2 row-start-2 flex h-full items-center justify-center text-center md:col-start-1 md:justify-start md:text-left">
          <div className="absolute">
            <div className="mb-1 max-w-xl text-lg font-semibold tracking-wide md:text-2xl lg:text-3xl 2xl:text-5xl">
              The NextJs eCommerce
            </div>
            <div
              className="mb-3 max-w-full bg-gradient-to-r from-orange-400 via-purple-400 to-pink-600 bg-clip-text
          text-4xl font-black text-transparent drop-shadow-lg md:text-6xl md:tracking-wide lg:text-8xl 2xl:text-9xl"
            >
              Fast & Modern
            </div>
            <div className="text-sm text-gray-500 md:text-xl 2xl:text-3xl">
              Powered By Shopify CMS
            </div>
          </div>
        </div>

        <div className="col-start-3 flex justify-start md:col-start-2 md:justify-center">
          <div className="flex w-[clamp(1rem,3rem,5rem)] items-end md:w-[clamp(3rem,7rem,10rem)] xl:ml-6">
            <Image className="" src={machine} alt="Machine" />
          </div>
        </div>

        <div className="col-start-2 row-start-1 grid items-start md:row-start-2 ">
          <div
            className="absolute grid  w-1/2 self-start justify-self-center
           md:absolute md:self-center md:justify-self-end"
          >
            <Image
              className="-rotate-90 md:rotate-0"
              src={rocket}
              alt="Rocket"
            />
            <div className="absolute grid "></div>
          </div>
        </div>

        <div className="col-start-2 row-start-3 grid">
          <div className="flex w-[clamp(3rem,7rem,10rem)] items-start xl:ml-6">
            <Image className="" src={cursor} alt="Cursor" />
          </div>
        </div>
      </div>

      <div
        className="absolute col-start-2 h-full w-full bg-gradient-to-bl from-pink-100
         via-white to-transparent md:bg-gradient-to-l"
      ></div>
    </div>
  )
}

export default HeroSection
