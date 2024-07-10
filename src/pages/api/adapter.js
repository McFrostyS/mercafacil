export function adaptMercadonaData(data) {
  return data.hits.map((item) => ({
    id: item.objectID,
    thumbnail: item.thumbnail,
    displayName: item.display_name,
    unitPrice: item.price_instructions.unit_price,
    previousPrice: item.price_instructions.previous_unit_price,
    referencePrice: item.price_instructions.reference_price,
    referenceFormat: item.price_instructions.reference_format
  }))
}
