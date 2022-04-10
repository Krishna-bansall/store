import ProductList from '../../components/ProductList'
import { getProductInCollection, getProduct } from '../lib/shopify'

export default function Products({ product }) {
  return (
    <div className="min-h-screen py-12 sm:pt-20">
      <ProductList product={product} />
    </div>
  )
}

export async function getStaticProps() {
  const products = await getProductInCollection()

  return {
    props: { products }, // will be passed to the page component as props
  }
}
