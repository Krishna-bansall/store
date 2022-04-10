import Image from 'next/image'
import ProductForm from './ProductForm'
import ReactImageMagnify from 'react-image-magnify'

export default function ProductPageContent({ product }) {
  return (
    <div
      className="mx-auto flex w-11/12 max-w-6xl flex-col items-center justify-center
     space-y-8 md:flex-row md:items-start md:space-y-0 md:space-x-4 lg:space-x-8"
    >
      <div className="w-full max-w-md overflow-hidden rounded-2xl border bg-white shadow-lg md:w-1/2">
        <div className="relative h-96 w-full">
          <ReactImageMagnify
            {...{
              smallImage: {
                src: `${product.images.edges[0].node.url}`,
                alt: `${product.images.edges[0].node.altText}`,
                isFluid: true,
                // layout:"fill",
                // objectFit:"cover",
              },
            }}
          />
        </div>
      </div>
      <ProductForm product={product} />
    </div>
  )
}
