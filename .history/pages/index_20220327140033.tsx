import {getProductInCollection} from '../lib/shopify'

const Home = (props) => {
  console.log("product" , props)
  return (
    <div className="text-3xl">
      Hello World
    </div>
  )
}
export async function GetStaticProps() {
  const products = await getProductInCollection();
  console.log("prod", products.data)
  return {
    props: {products}, // will be passed to the page component as props
  }
}


export default Home
