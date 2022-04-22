import Link from 'next/link'
import { useContext, useRef } from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player'
import { CartContext } from '../context/shopContext'
import MiniCart from './MiniCart'
import animation from '../public/images/animation.json'

export default function Nav() {
  const { cart, cartOpen, setCartOpen } = useContext(CartContext)

  let cartQuantity = 0
  cart.map((item) => {
    return (cartQuantity += item?.variantQuantity)
  })

  const lottieRef = useRef(null)

  return (
    <>
      <header className="sticky top-0 z-20 border-b  backdrop-blur-md">
        <div className="item-center flex max-w-6xl justify-between pl-4 pr-8 pt-6 pb-3 md:px-20 lg:max-w-full">
          <Link href="/" passHref>
            <a className="cursor-pointer">
              <span className="pt-1 text-lg font-bold 2xl:text-3xl">
                Shopify + Next JS
              </span>
            </a>
          </Link>
          <a
            onClick={() => setCartOpen(!cartOpen)}
            className="text-medium cursor-pointer font-bold 2xl:text-2xl"
          >
            <div className="flex flex-row">
              <Player
                className="absolute -translate-y-5 -translate-x-8"
                onStateChange={(cart) => console.log('dik', cart)}
                ref={lottieRef}
                // autoplay
                // loop
                isStopped={false}
                src={animation}
                style={{ height: '60px', width: '60px' }}
              >
                <Controls
                  // visible={true}
                  buttons={['play', 'repeat', 'frame', 'debug']}
                />
              </Player>
              {/* <div className="ml-5">Cart ({cartQuantity})</div> */}
            </div>
          </a>
        </div>
      </header>
      <div className="z-40">
        <MiniCart cart={cart} />
      </div>
    </>
  )
}
