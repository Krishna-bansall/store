import ProductCard from './ProductCard'
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
      staggerChildren: 3,
    },
  },
}

function ProductList(products) {
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="mb-6 text-2xl font-extrabold text-gray-900">
            Product
          </h2>

          <motion.div
            variant={stagger}
            className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
          >
            {products.product.map((item) => (
              <motion.div variants={fadeInUp}>
                <ProductCard key={item.node.id} product={item} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default ProductList
