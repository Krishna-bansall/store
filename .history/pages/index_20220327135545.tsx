import {getProductInCollection} from '../lib/shopify'

const Home = ({product}) => {
  console.log("product" , product)
  return (
    <div className="text-3xl">
      Hello World
    </div>
  )
}
export async function getStaticProps() {
  const products = await getProductInCollection();
  const allProducts = await products.json()
  console.log("prod", products.data)
  return {
    props: {allProducts}, // will be passed to the page component as props
  }
}


export default Home
