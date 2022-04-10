import Link from 'next/link'
import Image from 'next/image'
import { formatter } from '../utils/helpers'
import { motion } from 'framer-motion'

const ProductCard = ({ product }) => {
  const { handle, title } = product.node
  const { altText, src } = product.node.images.edges[0].node
  const price = product.node.priceRange.minVariantPrice.amount

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Link href={`/products/${handle}`}>
        <a className="group">
          <div className="w-full overflow-hidden rounded-3xl bg-gray-200">
            <div className="relative h-72 group-hover:opacity-75 ">
              <Image src={src} alt={altText} layout="fill" objectFit="cover" />
            </div>
          </div>
          <h3 className="mt-4 text-lg font-medium text-gray-900">{title}</h3>
          <h4 className="mt-1 text-sm text-gray-700">
            {formatter.format(price)}
          </h4>
        </a>
      </Link>
    </motion.div>
  )
}
export default ProductCard
