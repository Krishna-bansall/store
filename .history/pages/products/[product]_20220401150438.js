import { getAllProducts, getProduct } from '../../lib/shopify'

export default function ProductPage({ product }) {
  return <div>df</div>
}

export async function getStaticPaths() {
  const products = await getAllProducts()
  const paths = products.map((item) => {
    const handle = String(item.node.handle)
    return { params: { product: handle } }
  })
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  console.log(await getProduct('futurecyborg'))
  const product = await getProduct(params.product)
  return { props: { product } }
}
