import { getProductInCollection, getProduct } from '../lib/shopify'
import ProductList from '../components/ProductList'
import HeroSection from '../components/HeroSection'

const Home = ({ products }) => {
  return (
    <div className="">
      <HeroSection></HeroSection>
      <ProductList product={products} />{' '}
    </div>
  )
}
export async function getStaticProps() {
  const products = await getProductInCollection()

  return {
    props: { products }, // will be passed to the page component as props
  }
}

export default Home
