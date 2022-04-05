import '../styles/globals.css'
import Layout from '../components/Layout'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (<Layout className="overflow-hidden">
    
    <Component {...pageProps} />
    </Layout>
    )
}

export default MyApp
