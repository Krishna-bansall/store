const domain = process.env.SHOPIFY_STORE_DOMAIN
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN

const shopifyData = async (query) => {
  const URL = `https://${domain}/api/2022-01/graphql.json`
  const options = {
    endpoints: URL,
    method: 'POST',
    headers: {
      'X-Shopify-Storefront-Access-Token': storefrontAccessToken,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  }

  try {
    const data = await fetch(URL, options).then((res) => res.json())
    console.log('data', data)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

export const getProductInCollection = async () => {
  const query = `
    {
            collection(handle: "frontpage") {
            title
            products(first: 25) {
                edges {
                node {
                    id
                    title
                    handle
                    priceRange{
                      minVariantPrice{
                        amount
                      }
                    }
                    images(first: 5) {
                    edges {
                        node {
                        src
                        altText
                        }
                    }
                    }
                }
                }
            }
            }
        }
      `
  const response = await shopifyData(query).then((res) => res)
  console.log('res', response?.data?.collection?.products)
  const allProducts = response?.data?.collection?.products
    ? response.data.collection.products.edges
    : []

  return allProducts
}

export const getAllProducts = async () => {
  const query = `
  {
    products(first: 25){
      edges{
        node{
          id
        }
      }
    }
  }`
  const response = await shopifyData(query)
  const slugs = response.data.products.edges ? response.data.products.edges : []
  return slugs
}
