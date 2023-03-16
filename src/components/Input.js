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
      <label className='text-primary-Dark-grayish-cyan text-sm font-bold'>{name}</label>
      <div className='bg-primary-Very-light-grayish-cyan text-primary-Very-dark-cyan text-right text-lg font-bold py-2 px-3 rounded-md font-body'>
        <input type="number" placeholder="0"  min="0" className='w-full text-right border-none focus:outline-none bg-transparent' />
      </div>
    </div>
  )
}

export default Input