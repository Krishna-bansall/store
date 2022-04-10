import ProductPageContent from '../../components/ProductPageContent'
import { getAllProducts, getProduct } from '../../lib/shopify'
import { motion } from 'framer-motion'

export default function ProductPage({ product }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      // exit={{ opacity: 0 }}
    >
      <div className="min-h-screen py-12 sm:pt-20">
        <ProductPageContent product={product} />
      </div>
    </motion.div>
  )
}

export async function getStaticPaths() {
  const products = await getAllProducts()

  const paths = products.map((item) => {
    const handle = String(item.node.handle)
    return { params: { product: handle } }
  })
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const product = await getProduct(params.product)
  return { props: { product } }
}
