import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="text-3xl">
      Hello World
    </div>
  )
}
export async function getStaticProps() {
  const product = await getProductInCollection();
  return {
    props: {}, // will be passed to the page component as props
  }
}


export default Home
