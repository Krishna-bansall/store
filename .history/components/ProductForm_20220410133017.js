import { useState, useContext } from 'react'

function ProductForm({ product }) {
  console.log(product)
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

  const [selectedVariant, setSelectedVariant] = useState(allVariantOptions[0])
  const [selectedOptions, setSelectedOptions] = useState(defaultValues)

  return <div></div>
}

export default ProductForm
