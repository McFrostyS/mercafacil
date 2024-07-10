import { adaptMercadonaData } from './adapter'

export async function getMercadona(searchTerm) {
  const response = await fetch(
    'https://7uzjkl1dj0-dsn.algolia.net/1/indexes/products_prod_4568_es/query?x-algolia-agent=Algolia%20for%20JavaScript%20(3.35.1)%3B%20Browser&x-algolia-application-id=7UZJKL1DJ0&x-algolia-api-key=9d8f2e39e90df472b4f2e559a116fe17',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        params: `query=${searchTerm}&clickAnalytics=true&analyticsTags=["web"]&getRankingInfo=true`
      })
    }
  )

  const json = await response.json()
  console.log(json)
  return new Response(JSON.stringify(adaptMercadonaData(json)), {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
