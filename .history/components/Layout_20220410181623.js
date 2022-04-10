import React, { Children } from 'react'
import Nav from './Nav'
import { AnimatePresence } from 'framer-motion'

function Layout({ children }) {
  return (
    <div className="flex flex-col justify-between">
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <div className="overflow-hidden">
          <main>{children}</main>
          <footer>Footer</footer>
        </div>
      </AnimatePresence>
    </div>
  )
}

export default Layout
