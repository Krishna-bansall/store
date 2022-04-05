import React from 'react'

function HeroSection() {
  return (
    <div className="flex min-h-screen flex-row bg-white ">
      <div className="mx-4 max-w-xl justify-self-start py-16 px-4 text-white">
        Hello Folks
      </div>
      <div className="mx-4 max-w-xl py-16 px-4">Hello Folks</div>
      <div className=" grid h-screen grid-cols-2  bg-green-400 ">
        <div className=" h-screen w-1/2 flex-grow bg-black"> </div>{' '}
      </div>
    </div>
  )
}

export default HeroSection
