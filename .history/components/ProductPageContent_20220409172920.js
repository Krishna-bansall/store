import Image from 'next/image'

export default function ProductPageContent({ product }) {
  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      {product.title}
    </div>
  )
}
