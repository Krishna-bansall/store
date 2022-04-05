import React from 'react'

function HeroSection() {
  return (
    <div className="flex min-h-screen flex-row bg-white ">
      <div className="flex min-h-screen min-w-full justify-end">
        <div className="min-h-full w-1/2 bg-black"></div>
      </div>
      <div className="absolute mx-4 max-w-xl justify-self-start py-16 px-4 ">
        Hello Folks
      </div>
      <div className="absolute mx-4 max-w-xl py-16 px-4">Hello Folks</div>
    </div>
  )
}

export default HeroSection
