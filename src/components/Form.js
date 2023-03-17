import React from 'react'
import Input from './Input'
import { CustomInput } from './Input';
import { TipButton } from './Button';
import DollarIcon from '../images/icon-dollar.svg';
import PersonIcon from '../images/icon-person.svg';


function Form() {
  return (
    <form action="">
      <Input name="Bill" icon={DollarIcon} />
      <h2 className="py-2 mt-4 text-primary-Dark-grayish-cyan font-bold">Select Tip %</h2>
      <div className="grid grid-cols-3 gap-4 mb-10">
        <TipButton percentValue={5} />
        <TipButton percentValue={10} />
        <TipButton percentValue={15} />
        <TipButton percentValue={25} />
        <TipButton percentValue={50} />
        <CustomInput />
      </div>
      <div>
        <Input name="People" icon={PersonIcon} />
      </div>
    </form>
  );
}

export default Form