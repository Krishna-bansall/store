const domain = process.env.SHOPIFY_STORE_DOMAIN
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_TOKEN

const shopifyData = async () => {
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
    const data = await fetch(URL, options).then((res) => res.JSON)
    return data
  } catch (error) {
    throw new Error('Products Not Fetched')
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
}
