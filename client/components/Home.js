import React from 'react'

import ImageScroller from './ImageScroller'
import ProductGallery from './ProductGallery'

import { categories, products } from '../../products.js'

export default React.createClass({
  render () {
    const featured = products.filter(function (item) {
      return item.featured
    })
    return (
      <div>
        <ImageScroller categories={categories} />
        <ProductGallery products={featured} />
      </div>
    )
  }
})
