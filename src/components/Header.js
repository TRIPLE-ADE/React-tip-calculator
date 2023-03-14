import React from 'react'
import logo from '../images/logo.svg'

function Header() {
  return (
    <header className='flex justify-center'>
        <img src={logo} alt="" />
    </header>
  )
}

export default Header