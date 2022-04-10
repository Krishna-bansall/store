import React from 'react'

function ProductOptions({ name, values, selectedOptions }) {
  return (
    <fieldset>
      <legend className="text-xl font-semibold">{name}</legend>
      <div className="inline-flex flex-wrap items-center">
        {values.map((value) => {
          const id = `option-${name}-${value}`
          const checked = selectedOptions[name] === value
        })}
      </div>
    </fieldset>
  )
}

export default ProductOptions
