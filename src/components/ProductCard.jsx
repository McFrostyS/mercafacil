export const ProductCard = ({ result }) => {
  return (
    <div className='card' data-key={result.id}>
      <img src={result.thumbnail} alt={result.displayName} className='card-img-top' />
      <div className='card-body'>
        <h5 className='card-title'>{result.displayName}</h5>
        <p className='brand-title'>{result.brand}</p>
        <p className='previous-price'>{result.previousPrice}</p>
        <p className='price'>{result.price}</p>
        <p className='reference-price'>{result.referencePrice}</p>
        <p className='reference-format'>{result.referenceFormat}</p>
      </div>
    </div>
  )
}

export default ProductCard
