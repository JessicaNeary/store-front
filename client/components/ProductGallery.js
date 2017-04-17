import React from 'react'

const ProductGallery = ({products}) => {
  const display = products ? products.map(function (item) {
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
