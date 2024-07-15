import { useState } from 'react'
import { getAll, getCarrefour, getDia, getMercadona } from '../pages/api/search'

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
          <div key={result.id} className='card'>
            <img
              src={result.thumbnail}
              alt={result.displayName}
              className='card-img-top'
            />
            <div className='card-body'>
              <h5 className='card-title'>{result.displayName}</h5>
              <p className='brand-title'>{result.brand}</p>
              <p className='card-text'>
                Precio: <s>{result.previousPrice}</s> {result.price} €
              </p>
              <p>
                ({result.referencePrice} €/
                {result.referenceFormat.toLowerCase()})
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
