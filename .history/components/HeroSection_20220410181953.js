import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import rocket from '../public/images/rocket.png'
import machine from '../public/images/machine.png'
import cursor from '../public/images/cursor.png'
import down from '../public/images/down.png'

function HeroSection() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      className="relative grid h-screen grid-cols-2 bg-white"
    >
      <div
        className="z-10 col-span-2 grid max-h-screen grid-cols-[1fr_3fr_1fr] grid-rows-[3fr_2fr_3fr] 
      px-4 py-20 md:grid-cols-[2fr_1fr] md:grid-rows-[1fr_2fr_2fr] md:px-20"
      >
        <div className="col-start-2 row-start-2 flex h-full items-center justify-center text-center md:col-start-1 md:justify-start md:text-left">
          <div className="absolute -translate-y-1/2 md:translate-y-0">
            <h3 className="mb-1 max-w-xl text-lg font-semibold tracking-wide md:text-2xl lg:text-3xl 2xl:text-5xl">
              The NextJs eCommerce
            </h3>
            <h1
              className="mb-3 max-w-full bg-gradient-to-r from-orange-400 via-purple-400 to-pink-600 bg-clip-text
          text-4xl font-black text-transparent drop-shadow-lg md:text-6xl md:tracking-wide lg:text-8xl 2xl:text-9xl"
            >
              Fast & Modern
            </h1>
            <p className="text-sm text-gray-500 md:text-xl 2xl:text-3xl">
              Powered By Shopify CMS
            </p>
          </div>
        </div>

        <div className="col-start-3 flex justify-start md:col-start-2 md:justify-center">
          <div className="flex w-full items-end md:w-[clamp(3rem,7rem,10rem)] xl:ml-6">
            <Image className="" src={machine} alt="Machine" />
          </div>
        </div>

        <div className="col-start-2 row-start-1 hidden items-start md:visible md:row-start-2 md:grid ">
          <div className="absolute grid max-w-xs self-center justify-self-end lg:max-w-full">
            <Image className="" src={rocket} alt="Rocket" />
          </div>
        </div>

        <div className="visible  col-start-2 row-start-1 flex items-end justify-center md:hidden">
          <div className="flex w-40 items-end">
            <Image className="-rotate-90 " src={rocket} alt="Rocket" />
          </div>
        </div>

        <div className="col-start-3 row-start-2 grid md:col-start-2 md:row-start-3">
          <div className="flex items-start md:w-[clamp(3rem,7rem,10rem)] xl:ml-6">
            <Image
              className="-rotate-45 md:rotate-0"
              src={cursor}
              alt="Cursor"
            />
          </div>
        </div>
        <div className="col-start-2 row-start-3 flex items-center justify-center md:col-start-1">
          <motion.div
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.9 }}
            className="w-10 cursor-pointer md:ml-28 lg:ml-64"
          >
            <Link href={'products'}>
              <Image src={down} alt="down" />
            </Link>
          </motion.div>
        </div>
      </div>

      <div
        className="absolute col-start-2 h-full w-full bg-gradient-to-bl from-pink-100
         via-white to-transparent md:bg-gradient-to-l"
      ></div>
    </motion.div>
  )
}

export default HeroSection
