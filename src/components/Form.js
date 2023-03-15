import React from 'react'
import Input from './Input'
import { CustomInput } from './Input';
import { TipButton } from './Button';
import DollarIcon from '../images/icon-dollar.svg';
import PersonIcon from '../images/icon-person.svg';


function Form() {
  return (
    <div>
      <div>
        <h3 className="font-body text-primary-Dark-grayish-cyan text-lg">
          Bill
        </h3>
        <Input name="bill" icon={DollarIcon} />
      </div>

      <div className="grid grid-cols-3 gap-4 my-6">
        <TipButton percentValue={5} />
        <TipButton percentValue={10} />
        <TipButton percentValue={15} />
        <TipButton percentValue={25} />
        <TipButton percentValue={50} />
        <CustomInput />
      </div>
      <div>
        <h3 className="font-body text-primary-Dark-grayish-cyan text-lg">
          Number of People
        </h3>
        <Input name="people" icon={PersonIcon} />
      </div>
    </div>
  );
}

export default Form