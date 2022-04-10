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
    }
  })

  return <div></div>
}

export default ProductForm
