import Link from 'next/link'
import Image from 'next/image'
const ProductCard = ({ product }) => {
  const { handle, title } = product.node
  const { altText, src } = product.node.images.edges[0].node

  return (
    <div>
      <Link href={`/product/${handle}`}>
        <a className="group">
          <div className="w-full overflow-hidden rounded-3xl bg-gray-200">
            <div className="relative h-72 group-hover:opacity-75 ">
              <Image src={src} alt={altText} layout="fill" objectFit="cover" />
            </div>
          </div>
          <h3 className="text-7xl ">{title}</h3>
        </a>
      </Link>
    </div>
  )
}
export default ProductCard
