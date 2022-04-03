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
  console.log()
  const products = await getProductInCollection()

  return {
    props: { products }, // will be passed to the page component as props
  }
}

export default Home
