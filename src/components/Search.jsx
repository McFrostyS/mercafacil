// src/components/SearchComponent.jsx
import { useState } from 'react'
import { getMercadona } from '../pages/api/search'

export default function Search() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  async function search() {
    console.log('searching...')
    const response = await getMercadona(query)
    const json = await response.json()
    setResults(json.hits)

    console.log(json)
  }
  console.log(results)

  return (
    <div>
      <input
        type='text'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && search()}
      />
      <button onClick={search}>Buscar</button>
      <ul>
        {results.map((result) => (
          <li key={result.id}>{result.display_name}</li>
        ))}
      </ul>
    </div>
  )
}
