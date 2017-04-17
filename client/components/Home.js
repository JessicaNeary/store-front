import React from 'react'

import ImageScroller from './ImageScroller'
import ProductGallery from './ProductGallery'

import { categories } from '../../products.js'

export default React.createClass({
  render () {
    return (
      <div>
        <ImageScroller categories={categories} />
        <ProductGallery />
      </div>
    )
  }
})
