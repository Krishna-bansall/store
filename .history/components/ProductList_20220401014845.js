import ProductCard from './ProductCard'

function ProductList(products) {
  console.log('producsfst', products.product)
  return (
    <div className="bg-white">
      <div className="ld:px-8 mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl">
        <h2 className="mb-6 text-2xl font-extrabold text-gray-900">Product</h2>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6">
          {products.product.map((item) => (
            <ProductCard key={item.node.id} product={item} />
            // item.node.handle
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductList
