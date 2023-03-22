import React from 'react';


export function CustomInput({onChange, value}) {
  return (
    <input
      type="number"
      name="custom"
      min="0"
      value={value}
      onChange={onChange}
      placeholder="Custom"
      className="block text-center font-bold placeholder:text-primary-Dark-grayish-cyan bg-primary-Very-light-grayish-cyan focus:outline-none rounded-md text-primary-Very-dark-cyan"
    />
  );
}

function Input({
  title,
  icon,
  name,
  onChange,
  value,
  setInputError,
  setPeopleError,
  setBillError,
  setErrorMessage,
  setPeopleErrorMessage,
  setBillErrorMessage,
}) {
  return (
    <div className="grid gap-1">
      <div className="flex items-center justify-between">
        <label className="text-primary-Dark-grayish-cyan text-sm font-bold">
          {title}
        </label>
        <span
          className={`text-sm font-bold text-red-500 ${
            setErrorMessage
              ? "opacity-100"
              : setPeopleErrorMessage
              ? "opacity-100"
              : setBillErrorMessage
              ? "opacity-100"
              : "opacity-0"
          }`}
        >
          Can't be zero
        </span>
      </div>

      <div className="relative">
        <img
          src={icon}
          alt=""
          className="absolute top-3 px-2 left-3 bg-primary-Very-light-grayish-cyan"
        />
        <input
          type="number"
          value={value}
          name={name}
          min="0"
          placeholder="0"
          onChange={onChange}
          className={`w-full block bg-primary-Very-light-grayish-cyan text-primary-Very-dark-cyan text-right text-lg font-bold py-2 px-3 rounded-md font-body focus:outline-none  ${
            setInputError
              ? "border-red-500 border-solid border-2"
              : setPeopleError
              ? "border-red-500 border-solid border-2"
              : setBillError
              ? "border-red-500 border-solid border-2"
              : "border-none"
          }`}
        />
      </div>
    </div>
  );
}

export default Input