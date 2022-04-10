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
      <div className="flex w-full md:grid md:grid-cols-3">
        <div className="z-10 flex w-screen flex-col items-center justify-center border-2 px-10 text-center md:col-span-2 md:items-start md:px-20 md:text-left">
          <div className="-translate-y-1/3">
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
        <div className="hidden max-h-screen w-full items-center  justify-center border-2 md:flex">
          {/* <Image className="absolute top-0  " src={rocket} alt="Rocket" />
          <Image className="absolute top-0  " src={machine} alt="machine" />
          <Image className="absolute top-0 " src={cursor} alt="cursor" /> */}
          <div className="relative h-2/3 w-2/3 ">
            <Image className="" src={rocket} alt="Rocket" layout="responsive" />
            <div className="absolute -right-5 -top-10 h-1/2 w-1/2">
              <Image
                className=""
                src={machine}
                alt="machine"
                layout="responsive"
              />
            </div>
            <div className="absolute -bottom-0 h-1/2 w-1/2">
              <Image
                className=""
                src={cursor}
                alt="cursor"
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
