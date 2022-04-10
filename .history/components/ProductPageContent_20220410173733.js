import Image from 'next/image'
import ProductForm from './ProductForm'
import { motion } from 'framer-motion'

export default function ProductPageContent({ product }) {
  console.log(product)
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        className="mx-auto flex w-11/12 max-w-6xl flex-col items-center justify-center
      space-y-8 md:flex-row md:items-start md:space-y-0 md:space-x-4 lg:space-x-8"
      >
        <div className="w-full max-w-md overflow-hidden rounded-2xl border bg-white shadow-lg md:w-1/2">
          <div className="relative h-96 w-full">
            <img
              src={`${product.images.edges[0].node.url}`}
              alt={product.images.edges[0].node.altText}
              className="instantial-scale-up-center absolute h-full w-full object-cover"
            ></img>
          </div>
        </div>
        <ProductForm product={product} />
      </div>
    </motion.div>
  )
}
