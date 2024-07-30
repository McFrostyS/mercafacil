export const ProductCard = ({ result }) => {
  return (
    <div key={result.id} className='card flex flex-col justify-center align-middle'>
      <img src={result.thumbnail} alt={result.displayName} className='card-img-top' />
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
  )
}
