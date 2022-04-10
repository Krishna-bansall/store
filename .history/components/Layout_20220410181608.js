import React, { Children } from 'react'
import Nav from './Nav'
import HeroSection from './HeroSection'
function Layout({ children }) {
  return (
    <div className="flex flex-col justify-between">
      <Nav />
      <AnimatePresence exitBeforeEnter> 

      <div className="overflow-hidden">
        <main>{children}</main>
        <footer>Footer</footer>
      </div>
    </div>
      </AnimatePresence>
  )
}

export default Layout
