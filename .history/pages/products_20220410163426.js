import ProductList from '../components/ProductList'
import { getProductInCollection, getProduct } from '../lib/shopify'
import { motion } from 'framer-motion'

export default function Products({ products }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="min-h-screen py-12 ">
        <ProductList product={products} />
      </div>
    </motion.div>
  )
}

export async function getStaticProps() {
  const products = await getProductInCollection()

  return {
    props: { products }, // will be passed to the page component as props
  }
}
