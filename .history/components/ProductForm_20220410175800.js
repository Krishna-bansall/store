import { useState, useContext } from 'react'
import { formatter } from '../utils/helpers'
import ProductOptions from './ProductOptions'
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

function ProductForm({ product }) {
  const allVariantOptions = product?.variants.edges?.map((variant) => {
    const allOptions = {}
    variant.node.selectedOptions.map(
      (item) => (allOptions[item.name] = item.value)
    )

    return {
      id: variant.node.id,
      title: variant.node.product.title,
      handle: variant.node.product.handle,
      image: variant.node?.image.url,
      options: allOptions,
      variantTitle: variant.node.title,
      variantPrice: variant.node.priceV2.amount,
      variantQuantity: 1,
    }
  })

  const defaultValues = {}
  product.options.map((item) => {
    defaultValues[item.name] = item.values[0]
  })

  // console.log(defaultValues, allVariantOptions)
  const [selectedVariant, setSelectedVariant] = useState(allVariantOptions[0])
  const [selectedOptions, setSelectedOptions] = useState(defaultValues)

  const setOptions = (name, value) => {
    setSelectedOptions((prev) => {
      return { ...prev, [name]: value }
    })
  }

  return (
    <motion.div
      animate="animate"
      initial="initial"
      exit="exit"
      className="md:1/3 flex w-full flex-col rounded-2xl p-4 shadow-lg"
    >
      <motion.div variants={stagger}>
        <motion.h2 variants={fadeInUp} className="text-2xl font-bold">
          {product.title}
        </motion.h2>
        <motion.span variants={fadeInUp} className="pb-6">
          {formatter.format(product.variants.edges[0].node.priceV2.amount)}
        </motion.span>

        <div className="pt-2 pb-10">
          {product.options.map(({ name, values }) => (
            <motion.div variants={fadeInUp}>
              <ProductOptions
                key={`key-${name}`}
                name={name}
                values={values}
                selectedOptions={selectedOptions}
                setOptions={setOptions}
              />
            </motion.div>
          ))}
        </div>

        <motion.button
          variants={fadeInUp}
          className="w-full rounded-lg bg-black px-2 py-3 text-white hover:bg-gray-800"
        >
          {' '}
          Add To Cart
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

export default ProductForm
