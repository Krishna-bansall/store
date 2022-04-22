import Link from 'next/link'
import { useContext } from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player'
import { CartContext } from '../context/shopContext'
import MiniCart from './MiniCart'

export default function Nav() {
  const { cart, cartOpen, setCartOpen } = useContext(CartContext)

  let cartQuantity = 0
  cart.map((item) => {
    return (cartQuantity += item?.variantQuantity)
  })

  return (
    <div className="overflow-hidden">
      <header className="sticky top-0 z-20 border-b  backdrop-blur-md">
        <div className="item-center flex max-w-6xl justify-between px-4 pt-6 pb-3 md:px-20 lg:max-w-full">
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
              <div className="mr-5">Cart ({cartQuantity})</div>
              <Player
                className="absolute -translate-y-12 -translate-x-10"
                autoplay
                loop
                src="https://assets9.lottiefiles.com/temp/lf20_phx0zt.json"
                style={{ height: '100px', width: '100px' }}
              >
                <Controls
                  // visible={true}
                  buttons={['play', 'repeat', 'frame', 'debug']}
                />
              </Player>
            </div>
          </a>
        </div>
      </header>
      <div className="z-40">
        <MiniCart cart={cart} />
      </div>
    </div>
  )
}
