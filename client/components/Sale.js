import React from 'react'

import ProductGallery from './ProductGallery'

import { products } from '../../products.js'

const Sale = props => {
  const content = products.filter(function (product) {
    return product.onSale
  })
  return (
    <div className='Sale'>
      <h1>Sale</h1>
      <ProductGallery products={content} />
    </div>
  )
}

export default Sale
