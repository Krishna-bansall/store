import '../styles/globals.css'
import ShopProvider from '../context/shopContext'

import Layout from '../components/Layout'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ShopProvider>

          <Layout>
            <Component {...pageProps} />
          </Layout>
    </ShopProvider>
    )
}

export default MyApp
