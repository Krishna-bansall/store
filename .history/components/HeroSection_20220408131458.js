import React from 'react'
import Image from 'next/image'
import rocket from '../public/images/rocket.png'
import machine from '../public/images/machine.png'
import cursor from '../public/images/cursor.png'
import down from '../public/images/down.png'
function HeroSection() {
  return (
    <div className="relative grid h-screen grid-cols-2 bg-white">
      <div className="z-10 col-span-2 grid max-h-screen grid-cols-[2fr_1fr] grid-rows-[1fr_2fr_2fr] px-4 md:px-20 md:py-20">
        <div className="row-start-2 flex h-full items-center">
          <div className="">
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
        <div className="col-start-2 flex justify-center">
          <div className="flex w-[clamp(3rem,7rem,10rem)] items-end">
            <Image className="self-end" src={machine} alt="Machine" />
          </div>
        </div>

        <div className="col-start-2 row-start-2 grid items-start ">
          <div className="absolute grid self-center justify-self-end">
            <Image className="" src={rocket} alt="Rocket" />
            <div className="absolute grid "></div>
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
