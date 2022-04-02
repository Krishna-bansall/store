import {getProductInCollection} from '../lib/shopify'

const Home = ({products}) => {
  console.log("product" , products)
  return (
    <div className="text-3xl">
      Hello World
    </div>
  )
}
export async function getStaticProps() {
  const products = await getProductInCollection();
  console.log("prod", products.data)
  return {
    props: {products}, // will be passed to the page component as props
  }
}


export default Home
