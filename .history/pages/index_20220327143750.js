import { getProductInCollection } from '../lib/shopify'
import ProductList from '../components/ProductList'

const Home = ({ products }) => {
  console.log('product', products)
  return (
    <div className="text-3xl">
      <ProductList product="ad" />{' '}
    </div>
  )
}
export async function getStaticProps() {
  const products = await getProductInCollection()
  console.log('prod', products)
  return {
    props: { products }, // will be passed to the page component as props
  }
}

export default Home
