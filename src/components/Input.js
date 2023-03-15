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
    <div>
        <label className="block">{name}</label>
        <input type="number" placeholder="0"/>
    </div>
  )
}

export default Input