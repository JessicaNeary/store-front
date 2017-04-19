import React from 'react'

import ProductGallery from './ProductGallery'

import { products } from '../../products.js'

const Category = props => {
  const id = Number(props.params.id)
  const content = products.filter(function (product) {
    return product.category === id
  })
  return (
    <div className='Category'>
      <ProductGallery products={content} />
    </div>
  )
}

export default Category
