import React from 'react'

function HeroSection() {
  return (
    <div className="flex min-h-screen flex-row bg-white ">
      <div className="mx-4 max-w-xl justify-self-start py-16 px-4 text-white">
        Hello Folks
      </div>
      <div className="mx-4 max-w-xl py-16 px-4">Hello Folks</div>
      <div className="absolute h-screen w-1/2  bg-black py-4"> </div>
      <div className="absolute h-screen w-max  bg-green-400 py-4"> </div>
    </div>
  )
}

export default HeroSection
