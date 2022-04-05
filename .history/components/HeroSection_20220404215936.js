import React from 'react'

function HeroSection() {
  return (
    <div className="flex min-h-screen justify-end bg-white ">
      <div className="z-10 mx-4 max-w-xl justify-self-start py-16 px-4 text-white">
        Hello Folks
      </div>
      <div className="mx-4 max-w-xl py-16 px-4">Hello Folks</div>
      <div className="absolute z-0 h-screen w-1/2 bg-black py-4"> </div>
    </div>
  )
}

export default HeroSection
