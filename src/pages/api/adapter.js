export function adaptMercadonaData(data) {
  return data.hits.map((item) => ({
    brand: 'Mercadona',
    id: item.objectID,
    thumbnail: item.thumbnail,
    displayName: item.display_name,
    unitPrice: item.price_instructions.unit_price,
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
    unitPrice: item.active_price,
    previousPrice: item.price.original_price,
    referencePrice: item.price_per_unit_text,
    referenceFormat: item.price.reference_format
  }))
}
