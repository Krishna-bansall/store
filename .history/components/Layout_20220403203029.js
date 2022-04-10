import React, { Children } from 'react'

function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <main>{children}</main>
    </div>
  )
}

export default Layout
