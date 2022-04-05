import '../styles/globals.css'
import Layout from '../components/Layout'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <html>
      <body className='overflow-x-hidden'>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </body>
    </html>
    )
}

export default MyApp