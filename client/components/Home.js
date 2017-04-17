import React from 'react'

import ImageScroller from './ImageScroller'
import ProductGallery from './ProductGallery'

import { categories, products } from '../../products.js'

export default React.createClass({
  render () {
    return (
      <div>
        <ImageScroller categories={categories} />
        <ProductGallery products={products} />
      </div>
    )
  }
})
