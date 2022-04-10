import React from 'react'
import Link from 'next/link'
export default function Nav() {
  return (
    <header className="sticky top-0 z-20 border-b  backdrop-blur-md">
      <div className="item-center lg:max-w-screen flex max-w-6xl justify-between px-4 pt-6 pb-3 md:px-20">
        <Link href="/" passHref>
          <a className="cursor-pointer">
            <span className="pt-1 text-lg font-bold">Shopify + Next JS</span>
          </a>
        </Link>
        <a className="text-medium cursor pointer font-bold">Cart</a>
      </div>
    </header>
  )
}
