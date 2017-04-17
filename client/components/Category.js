import React from 'react'

import ProductGallery from './ProductGallery'

import { categories, products } from '../../products.js'

const Category = props => {
  const id = Number(props.params.id)
  const name = categories.filter(function (category) {
    return category.id === id
  })[0].name
  const content = products.filter(function (product) {
    return product.category === id
  })
  return (
    <div className='Category'>
      <h1>{name}</h1>
      <ProductGallery products={content} />
    </div>
  )
}

export default Category
