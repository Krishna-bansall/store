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
  }
}
