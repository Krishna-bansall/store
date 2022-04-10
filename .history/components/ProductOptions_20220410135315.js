import React from 'react'

function ProductOptions({ name, values, selectedOptions }) {
  return (
    <fieldset>
      <legend className="text-xl font-semibold">{name}</legend>
    </fieldset>
  )
}

export default ProductOptions
