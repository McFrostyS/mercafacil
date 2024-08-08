export const ProductCard = ({ result }) => {
  return (
    <div
      key={result.id}
      className='card flex flex-col justify-center items-center p-4 bg-black shadow-lg rounded-lg'
    >
      <img
        src={result.thumbnail}
        alt={result.displayName}
        className='card-img-top w-60 h-60 object-cover rounded-lg'
      />
      <div className='card-body p-4 w-full'>
        <h5 className='card-title text-lg font-semibold mb-2 truncate'>
          {result.displayName}
        </h5>
        <p className='brand-title text-gray-500 mb-2'>{result.brand}</p>
        <p className='card-text text-lg mb-2'>
          Precio: <s className='text-zinc-400'>{result.previousPrice}</s>{' '}
          <span>{result.price} €</span>
        </p>
        <p className='text-sm text-gray-400'>
          ({result.referencePrice} €/
          {result.referenceFormat.toLowerCase()})
        </p>
      </div>
    </div>
  )
}
