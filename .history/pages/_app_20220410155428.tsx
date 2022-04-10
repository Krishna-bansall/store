import '../styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import Layout from '../components/Layout'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <html>
      <body className=''>
        <AnimatePresence>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AnimatePresence>
      </body>
    </html>
    )
}

export default MyApp
