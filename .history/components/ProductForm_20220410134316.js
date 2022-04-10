import { useState, useContext } from 'react'

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
    </div>
  )
}

export default ProductForm
