import React from 'react'

import ProductGallery from './ProductGallery'

import { categories, products } from '../../products.js'

export default React.createClass({
  getInitialState () {
    return {
      id: 0,
      name: ''
    }
  },
  componentDidMount () {
    const id = Number(this.props.params.id)
    const category = categories.filter(function (cat) {
      return cat.id === id
    })[0]
    this.setState(category)
  },
  render () {
    const content = products.filter(function (product) {
      return product.category === this.state.id
    })
    return (
      <div className='Category'>
        <h1>{this.state.name}</h1>
        <ProductGallery products={content} />
      </div>
    )
  }
})
