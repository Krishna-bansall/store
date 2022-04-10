import ProductForm from './ProductForm'
import { motion } from 'framer-motion'

const easing = [0.6, -0.5, 0.01, 0.99]

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.6,
    },
  },
}

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
            <motion.img
              initial={{ opacity: 0, scale: 2 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              src={`${product.images.edges[0].node.url}`}
              alt={product.images.edges[0].node.altText}
              className="instantial-scale-up-center absolute h-full w-full object-cover"
            ></motion.img>
          </div>
        </div>
        <ProductForm product={product} />
      </div>
    </motion.div>
  )
}
