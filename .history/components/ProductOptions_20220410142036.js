import React from 'react'

function ProductOptions({ name, values, selectedOptions, setOptions }) {
  return (
    <fieldset>
      <legend className="text-xl font-semibold">{name}</legend>
      <div className="inline-flex flex-wrap items-center">
        {values.map((value) => {
          const id = `option-${name}-${value}`
          const checked = selectedOptions[name] === value

          return (
            <label key={id} htmlFor={id}>
              <input
                className="sr-only"
                type="radio"
                id={id}
                value={value}
                checked={checked}
                name={`option-${name}`}
                onChange={() => {
                  return setOptions(name, value)
                }}
              />
              <div
                className={`my-3 mr-3 block cursor-pointer rounded-full p-2 text-lg ${
                  checked
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-200 text-gray-900'
                }`}
              >
                <span className="px-2 ">{value}</span>
              </div>
            </label>
          )
        })}
      </div>
    </fieldset>
  )
}

export default ProductOptions
