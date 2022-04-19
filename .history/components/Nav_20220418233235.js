import Link from 'next/link'

import { useContext } from 'react'

export default function Nav() {
  return (
    <header className="sticky top-0 z-20 border-b  backdrop-blur-md">
      <div className="item-center flex max-w-6xl justify-between px-4 pt-6 pb-3 md:px-20 lg:max-w-full">
        <Link href="/" passHref>
          <a className="cursor-pointer">
            <span className="pt-1 text-lg font-bold 2xl:text-3xl">
              Shopify + Next JS
            </span>
          </a>
        </Link>
        <a className="text-medium cursor pointer font-bold 2xl:text-2xl">
          Cart
        </a>
      </div>
    </header>
  )
}
