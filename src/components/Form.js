import React from 'react'
import Input from './Input'
import { TipButton } from './Button'

function Form() {
  return (
    <form action="">
      <Input name="Bill" />
      <div className="grid-col-3 gap-x-2">
        <TipButton percentValue={5} />
        <TipButton percentValue={10} />
        <TipButton percentValue={15} />
        <TipButton percentValue={25} />
        <TipButton percentValue={50} />
        <Input name='custom'/>
      </div>
      <Input name="Number of People" />
    </form>
  );
}

export default Form