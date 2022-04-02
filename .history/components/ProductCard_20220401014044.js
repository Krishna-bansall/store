import Link from 'next/link'
import Images from 'next/images'
const ProductCard = ({ product }) => {
  const { handle, title } = product.node
  const { altText, orignalSrc } = product.node.images.edges[0].node

  return (
    <div>
      <Link>
        <a className="group">div.w-full</a>
      </Link>
    </div>
  )
}
export default ProductCard
