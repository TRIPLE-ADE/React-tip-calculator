import React from 'react'

export function CustomInput() {
  return (
    <input
      type="number"
      name="custom"
      min="0"
      placeholder="Custom"
      className="block text-center placeholder:text-primary-Dark-grayish-cyan bg-primary-Very-light-grayish-cyan focus:outline-none"
    />
  );
}

function Input({name}) {
  return (
    <div className='grid gap-2'>
        <label>{name}</label>
        <input type="number" placeholder="0" className='text-right'/>
    </div>
  )
}

export default Input