import { useState, useContext } from 'react'
import { formatter } from '../utils/helpers'
import ProductOptions from './ProductOptions'

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

  return (
    <div className="md:1/3 flex w-full flex-col rounded-2xl p-4 shadow-lg">
      <h2 className="text-2xl font-bold">{product.title}</h2>
      <span className="pb-6">
        {formatter.format(product.variants.edges[0].node.priceV2.amount)}
      </span>
      {product.options.map(({ name, values }) => {
        ;<ProductOptions
          key={`key-${name}`}
          name={name}
          values={values}
          selectedOptions={selectedOptions}
        />
      })}
    </div>
  )
}

export default ProductForm