import React, { Children } from 'react'
import Nav from './Nav'
function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Nav />
      <main>{children}</main>
      <Footer>Footer</Footer>
    </div>
  )
}

export default Layout
