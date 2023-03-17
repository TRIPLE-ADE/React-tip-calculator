import React from 'react'

export function CustomInput() {
  return (
    <input
      type="number"
      name="custom"
      min="0"
      max="50"
      placeholder="Custom"
      className="block text-center font-bold placeholder:text-primary-Dark-grayish-cyan bg-primary-Very-light-grayish-cyan focus:outline-none"
    />
  );
}


function Input({name, icon}) {
  return (
    <div className="grid gap-1">
      <label className="text-primary-Dark-grayish-cyan text-sm font-bold">
        {name}
      </label>
      <div className="relative">
        <img
          src={icon}
          alt=""
          className="absolute top-3 px-2 left-3 bg-primary-Very-light-grayish-cyan"
        />
        <input
          type="number"
          name={name}
          placeholder="0"
          className="w-full block bg-primary-Very-light-grayish-cyan text-primary-Very-dark-cyan text-right text-lg font-bold py-2 px-3 rounded-md font-body focus:outline-none"
        />
      </div>
    </div>
  );
}

export default Input