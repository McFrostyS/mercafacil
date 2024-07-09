// src/pages/api/search.js
export async function getMercadona(searchTerm) {
  const response = await fetch(
    'https://7uzjkl1dj0-dsn.algolia.net/1/indexes/products_prod_4315_es/query?x-algolia-application-id=7UZJKL1DJ0&x-algolia-api-key=9d8f2e39e90df472b4f2e559a116fe17',
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
  // Aquí puedes formatear los datos como necesites antes de enviarlos
  return new Response(JSON.stringify(json), {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
