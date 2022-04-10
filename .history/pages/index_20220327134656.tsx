import type { NextPage } from 'next'
import {getProductInCollection} from '../lib/shopify'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = ({product}) => {
  console.log("product" , product)
  return (
    <div className="text-3xl">
      Hello World
    </div>
  )
}
export async function getStaticProps() {
  const products = await getProductInCollection();
  return {
    props: {products}, // will be passed to the page component as props
  }
}


export default Home
