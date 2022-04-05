import React from 'react'

function HeroSection() {
  return (
    <div className="flex min-h-screen flex-row bg-white ">
      <div className="absolute flex min-h-screen min-w-full justify-end">
        <div className="absolute min-h-full w-full bg-gradient-to-bl from-pink-100 via-white to-transparent md:w-1/2 md:bg-gradient-to-l"></div>
      </div>
      <div className="z-10 flex flex-col">
        <div className=" mx-4 max-w-xl  py-16 px-2 ">Hello Folks</div>
        <div className=" mx-4 max-w-xl px-2 py-16">Hello Folks</div>
      </div>
    </div>
  )
}

export default HeroSection
