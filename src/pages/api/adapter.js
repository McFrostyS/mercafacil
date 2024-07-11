export function adaptMercadonaData(data) {
  return data.hits.map((item) => ({
    brand: 'Mercadona',
    id: item.objectID,
    thumbnail: item.thumbnail,
    displayName: item.display_name,
    price: item.price_instructions.unit_price,
    previousPrice: item.price_instructions.previous_unit_price,
    referencePrice: item.price_instructions.reference_price,
    referenceFormat: item.price_instructions.reference_format
  }))
}

export function adaptCarrefourData(data) {
  return data.content.docs.map((item) => ({
    brand: 'Carrefour',
    id: item.product_id,
    thumbnail: item.behavior_url,
    displayName: item.display_name,
    price: item.active_price,
    previousPrice: item.price.original_price,
    referencePrice: item.price_per_unit_text,
    referenceFormat: item.price.reference_format
  }))
}

export function adaptDiaData(data) {
  const imageHost = 'https://www.dia.es'
  return data.search_items.map((item) => {
    // Solo incluir previousPrice si es diferente de unitPrice
    const previousPrice =
      item.prices.strikethrough_price !== item.prices.price
        ? item.prices.strikethrough_price
        : undefined

    return {
      brand: 'Dia',
      id: item.object_id,
      thumbnail: imageHost + item.image,
      displayName: item.display_name,
      price: item.prices.price,
      previousPrice: previousPrice,
      discount: item.prices.discount_percentage,
      referencePrice: item.prices.price_per_unit,
      referenceFormat: item.prices.measure_unit
    }
  })
}

export function adaptAlcampoData(data) {
  return data.products.map((item) => ({
    brand: 'Alcampo',
    id: item.productId,
    thumbnail: item.image.src,
    displayName: item.name,
    price: item.price.current.amount,
    previousPrice: null,
    referencePrice: item.price.unit.current.amount,
    referenceFormat: item.price.unit.current.unit
  }))
}
