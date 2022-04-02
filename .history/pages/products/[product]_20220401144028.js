import { getAllProducts } from '../../lib/shopify'
export default function ProductPage({ product }) {
  return <div>ProductPage</div>
}

export async function getStaticPaths() {
  return { paths: {} }
}
