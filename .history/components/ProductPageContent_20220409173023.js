import Image from 'next/image'

export default function ProductPageContent({ product }) {
  return (
    <div
      className="flex flex-col items-center justify-center space-y-8 md:flex-row md:items-start
     md:space-y-0 md:space-x-4 lg:space-x-4"
    >
      {product.title}
    </div>
  )
}
