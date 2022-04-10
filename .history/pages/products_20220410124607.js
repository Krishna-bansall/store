import ProductList from '../components/ProductList'
import { getProductInCollection, getProduct } from '../lib/shopify'

export default function Products({ products }) {
  return (
    <div className="min-h-screen py-12 ">
      <ProductList product={products} />
    </div>
  )
}

export async function getStaticProps() {
  const products = await getProductInCollection()

  return {
    props: { products }, // will be passed to the page component as props
  }
}
