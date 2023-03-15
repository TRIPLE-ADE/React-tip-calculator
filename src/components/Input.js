import React from 'react'

function Input({name}) {
  return (
    <div>
        <label className="block">{name}</label>
        <input type="number" placeholder="0"/>
    </div>
  )
}

export default Input