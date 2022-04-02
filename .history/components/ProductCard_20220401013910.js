import Link from 'next/link'
import Images from 'next/Images'
const ProductCard = ({ product }) => {
  const { handle, title } = product.node
  const { altText, orignalSrc } = product.node.images.edges[0].node
  return <div></div>
}
export default ProductCard
