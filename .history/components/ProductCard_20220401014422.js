import Link from 'next/link'
import Image from 'next/image'
const ProductCard = ({ product }) => {
  const { handle, title } = product.node
  const { altText, orignalSrc } = product.node.images.edges[0].node

  return (
    <div>
      <Link>
        <a className="group">
          <div className="w-full overflow-hidden rounded-3xl bg-gray-200">
            <div className="relative h-72 group-hover:opacity-75 ">
              <Image
                src={orignalSrc}
                alt={altText}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}
export default ProductCard
