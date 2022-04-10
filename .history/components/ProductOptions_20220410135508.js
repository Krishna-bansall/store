import React from 'react'

function ProductOptions({ name, values, selectedOptions }) {
  return (
    <fieldset>
      <legend className="text-xl font-semibold">{name}</legend>
      <div className="inline-flex items-center flex-wrap">
          {values.map((value) => {
              const id = `${name}-${value}`
}}
      </div>
    </fieldset>
  )
}

export default ProductOptions
