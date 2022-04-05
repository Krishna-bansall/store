import React from 'react'
import Image from 'next/image'
import rocket from '../public/images/rocket.png'
import machine from '../public/images/machine.png'
import cursor from '../public/images/cursor.png'
function HeroSection() {
  return (
    <div className="flex min-h-screen flex-row bg-white ">
      <div className="absolute flex min-h-screen min-w-full justify-end">
        <div className="absolute min-h-full w-full bg-gradient-to-bl from-pink-100 via-white to-transparent md:w-1/2 md:bg-gradient-to-l"></div>
      </div>
      <div className="grid w-full grid-cols-1 md:grid-cols-3">
        <div className="z-10 flex flex-col justify-center border-2 px-10 text-right md:col-span-2 md:items-center md:text-left">
          <div className="md:-translate-y-1/2">
            <div className="mb-1 max-w-xl text-3xl font-semibold tracking-wide">
              The NextJs eCommerce
            </div>
            <div
              className="mb-3 max-w-xl bg-gradient-to-r from-orange-400 via-purple-400 to-pink-600 bg-clip-text
            text-7xl font-black tracking-wide text-transparent drop-shadow-lg"
            >
              Fast & Modern
            </div>
            <div className="text-xl text-gray-500">Powered By Shopify CMS</div>
          </div>
        </div>
        <div className="box-border flex max-h-screen w-full  items-center justify-center border-2 bg-slate-500">
          {/* <Image className="absolute top-0  " src={rocket} alt="Rocket" />
          <Image className="absolute top-0  " src={machine} alt="machine" />
          <Image className="absolute top-0 " src={cursor} alt="cursor" /> */}
          <div className="relative h-2/3 w-2/3 bg-green-300">
            <div className="absolute h-1/2 w-1/2 bg-pink-300"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
