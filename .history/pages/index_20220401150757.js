import { getProductInCollection, getProduct } from '../lib/shopify'
import ProductList from '../components/ProductList'

const Home = ({ products }) => {
  return (
    <div className="">
      <ProductList product={products} />{' '}
    </div>
  )
}
export async function getStaticProps() {
  const products = await getProductInCollection()
  console.log('ulu', await getProduct('futurecyborg'))

  return {
    props: { products }, // will be passed to the page component as props
  }
}

export default Home
