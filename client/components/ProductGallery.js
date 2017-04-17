import React from 'react'

import { products } from '../../products.js'

const ProductGallery = () => {
  const featured = products ? products.filter(function (item) {
    return item.featured
  }) : null
  const display = featured ? featured.map(function (item) {
    return (
      <div className='item' key={item.id}>
        <img src={item.image} />
        <h4>{item.name}</h4>
        <div>{item.description}</div>
      </div>
    )
  }) : <div>No products found</div>
  return (
    <div className='ProductGallery'>
      {display}
    </div>
  )
}

export default ProductGallery
