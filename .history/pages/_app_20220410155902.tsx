import '../styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import Layout from '../components/Layout'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
        <AnimatePresence exitBeforeEnter> 
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AnimatePresence>
    )
}

export default MyApp
