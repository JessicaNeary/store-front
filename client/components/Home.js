import React from 'react'

import ImageScroller from './ImageScroller'
import ProductGallery from './ProductGallery'

import { categories, products } from '../../products.js'

const Home = () => {
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

export default Home
