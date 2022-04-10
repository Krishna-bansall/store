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
  const products = JSON.stringify(await getProductInCollection());
  console.log("prod", JSON.stringify(products.data))
  return {
    props: {products}, // will be passed to the page component as props
  }
}


export default Home
