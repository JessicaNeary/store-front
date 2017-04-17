import React from 'react'
import { Link } from 'react-router'

import { categories } from '../../products.js'

const Header = () => {
  const links = categories.map(function (cat) {
    return <Link key={cat.id} className='item' to={`category/${cat.id}`}>{cat.name}</Link>
  })
  return (
    <div className='Header'>
      <div>
        <Link to='/'>
          <img className='logo' src='https://placehold.it/100x100' />
        </Link>
      </div>
      <div className='navigation'>
        {links}
        <Link className='item' to='sale'>Sale</Link>
      </div>
    </div>
  )
}

export default Header
