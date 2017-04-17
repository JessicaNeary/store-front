import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <div className='Header'>
      <div>
        <img className='logo' src='https://placehold.it/100x100' />
      </div>
      <div className='navigation'>
        <Link className='item' to='/'>Tops</Link>
        <Link className='item' to='/'>Bottoms</Link>
        <Link className='item' to='/'>Accessories</Link>
        <Link className='item' to='/'>Sale</Link>
      </div>
    </div>
  )
}

export default Header
