import React from 'react'

function HeroSection() {
  return (
    <div className="flex min-h-screen flex-row bg-white ">
      <div className="absolute flex min-h-screen min-w-full justify-end">
        <div className="absolute min-h-full w-full bg-gradient-to-bl from-pink-100 via-white to-transparent md:w-1/2 md:bg-gradient-to-l"></div>
      </div>
      <div className="z-10 flex flex-col justify-center px-10">
        <div className="-translate-y-1/2">
          <div className="mb-2 max-w-xl text-2xl font-semibold">
            The NextJS eCommerce
          </div>
          <div
            className="max-w-xl  bg-gradient-to-r from-orange-500 via-yellow-500
           to-pink-600 bg-clip-text text-7xl font-black text-transparent"
          >
            Fast & Modern
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
