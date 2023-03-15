import React from 'react'
import logo from '../images/logo.svg'

function Header() {
  return (
    <header className='flex justify-center pt-20 pb-10'>
        <img src={logo} alt="Logo" />
    </header>
  )
}

export default Header