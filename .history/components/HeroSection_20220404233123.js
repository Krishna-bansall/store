import React from 'react'
import Image from 'next/image'
function HeroSection() {
  return (
    <div className="flex min-h-screen flex-row bg-white ">
      <div className="absolute flex min-h-screen min-w-full justify-end">
        <div className="absolute min-h-full w-full bg-gradient-to-bl from-pink-100 via-white to-transparent md:w-1/2 md:bg-gradient-to-l"></div>
      </div>
      <div className="flex">
        <div className="z-10 flex flex-col justify-center px-10">
          <div className="-translate-y-1/2">
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
        <div>
          <Image src="../public/images/rocket.png" alt="Rocket" />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
