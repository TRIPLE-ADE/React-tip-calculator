import React from 'react'

function Input({name}) {
  return (
    <div className='grid gap-2'>
        <label>{name}</label>
        <input type="number" placeholder="0" className='text-right'/>
    </div>
  )
}

export default Input