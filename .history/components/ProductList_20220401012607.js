function ProductList(products) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4">
        <h2 className="mb-6 text-2xl font-extrabold text-gray-900">Product</h2>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6">{products.type}</div>
      </div>
    </div>
  )
}

export default ProductList
