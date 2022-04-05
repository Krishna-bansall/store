import React from 'react'

function HeroSection() {
  return (
    <div className="flex min-h-screen flex-row bg-white ">
      <div className="mx-4 max-w-xl justify-self-start py-16 px-4 text-white">
        Hello Folks
      </div>
      <div className="mx-4 max-w-xl py-16 px-4">Hello Folks</div>
      <div className="grid min-h-max min-w-max bg-slate-500">
        <div className="absolute h-screen w-1/2  bg-black py-4"> </div>
      </div>
    </div>
  )
}

export default HeroSection
