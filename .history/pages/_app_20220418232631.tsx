import '../styles/globals.css'
import ShopProvider from '../context/shopContext'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <ShopProvider>
        <Layout>
          <Component {...pageProps} key={router.asPath}/>
        </Layout>
    </ShopProvider>
    )
}

export default MyApp
