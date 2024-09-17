import { useState } from 'react'
import { getAll } from '../api/search'
import { ProductCard } from './ProductCard'
import { MagnifyingGlass } from './icons/MagnifyingGlass'
import { Spinner } from './icons/Spinner'

export default function Search() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  async function search() {
    setLoading(true)
    const response = await getAll(query)
    const json = await response.json()
    setResults(json)
    setLoading(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    search()
  }
  console.log(results)

  return (
    <main className='h-max'>
      <header className='mb-4'>
        <form className='max-w-md mx-auto' onSubmit={handleSubmit}>
          <label
            htmlFor='default-search'
            className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
          >
            Search
          </label>
          <div className='relative'>
            <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
              <MagnifyingGlass />
            </div>
            <input
              type='search'
              id='default-search'
              className='block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Busca tu producto deseado'
              required
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className='text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
              Search
            </button>
          </div>
        </form>
      </header>

      <section className='flex justify-center align-middle'>
        {(results.length === 0) & loading ? (
          <div role='status'>
            <Spinner />
            <span className='sr-only'>Loading...</span>
          </div>
        ) : null}
      </section>

      <section>
        {!loading && results.length > 0 && (
          <div className='w-[90%] flex flex-col justify-center items-start mx-auto mb-4'>
            <h2 className='text-sm text-gray-300'>
              Mostrando {results.length} resultados
            </h2>
          </div>
        )}
      </section>

      <section className='w-[90%] flex flex-col justify-center items-center mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
          {results.map((result) => (
            <ProductCard key={result.id} result={result} />
          ))}
        </div>
      </section>

      <section className='flex flex-col justify-center items-center'>
        {results.length === 0 && (
          <div className='text-center mt-8 w-[60%]'>
            <p className='text-lg font-medium text-white'>
              Con MercaFácil podrás buscar los productos que necesites en los principales
              supermercados en España con el propósito de ver rápidamente donde está más
              barato.
            </p>
          </div>
        )}
      </section>
    </main>
  )
}
