import React from 'react'
import Input from './Input'
import { CustomInput } from './Input';
import { TipButton } from './Button'

function Form() {
  return (
    <form action="">
      <Input name="Bill" />
      <div className="grid grid-cols-3 gap-4 my-8">
        <TipButton percentValue={5} />
        <TipButton percentValue={10} />
        <TipButton percentValue={15} />
        <TipButton percentValue={25} />
        <TipButton percentValue={50} />
        <CustomInput />
      </div>
      <Input name="Number of People" />
    </form>
  );
}

export default Form