import ProductCard from './ProductCard'

function ProductList(products) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="mb-6 text-2xl font-extrabold text-gray-900">Product</h2>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
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
