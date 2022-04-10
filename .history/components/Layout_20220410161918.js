import React, { Children } from 'react'
import Nav from './Nav'
import { AnimatePresence } from 'framer-motion'

function Layout({ children }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="flex flex-col justify-between">
        <Nav />
        <div className="overflow-hidden">
          <main>{children}</main>
          <footer>Footer</footer>
        </div>
      </div>
    </AnimatePresence>
  )
}

export default Layout
