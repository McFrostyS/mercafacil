import { useState } from 'react'
import { getAll } from '../pages/api/search'
import ProductCard from './ProductCard'

export default function Search() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  async function search() {
    const response = await getAll(query)
    const json = await response.json()
    setResults(json)
  }
  console.log(results)

  return (
    <main>
      <header className='mb-4'>
        <input
          type='text'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && search()}
          className='text-black'
        />
        <button onClick={search} className='bg-slate-200 text-black'>
          Buscar
        </button>
      </header>
      <div className='grid grid-cols-4 gap-8'>
        {results.map((result) => (
          <ProductCard key={result.id} result={result} />
        ))}
      </div>
    </main>
  )
}
