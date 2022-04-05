import React from 'react'

function HeroSection() {
  return (
    <div className="flex min-h-screen flex-row bg-white ">
      <div className="absolute flex min-h-screen min-w-full justify-end">
        <div className="absolute min-h-full bg-gradient-to-l from-pink-200 to-white md:w-1/2"></div>
      </div>
      <div className=" mx-4 max-w-xl justify-self-start py-16 px-4 ">
        Hello Folks
      </div>
      <div className=" mx-4 max-w-xl py-16 px-4">Hello Folks</div>
    </div>
  )
}

export default HeroSection
