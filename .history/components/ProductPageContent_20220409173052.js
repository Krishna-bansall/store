import Image from 'next/image'

export default function ProductPageContent({ product }) {
  return (
    <div
      className="mx-auto flex w-11/12 max-w-6xl flex-col items-center justify-center
     space-y-8 md:flex-row md:items-start md:space-y-0 md:space-x-4 lg:space-x-8"
    >
      {product.title}
    </div>
  )
}
