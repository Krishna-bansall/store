import React, { Children } from 'react'
import Nav from './Nav'
import HeroSection from './HeroSection'
function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col justify-between overflow-hidden">
      <Nav />
      <HeroSection />
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  )
}

export default Layout
