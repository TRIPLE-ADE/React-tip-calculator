import React from 'react'
import Input from './Input'
import { CustomInput } from './Input';
import { TipButton } from './Button';
import DollarIcon from '../images/icon-dollar.svg';
import PersonIcon from '../images/icon-person.svg';


function Form({
  billValue,
  onChange,
  customValue,
  onClick,
  peopleValue,
  setInputError,
  setPeopleError,
  setBillError,
}) {
  return (
    <div>
      <Input
        title="Bill"
        icon={DollarIcon}
        value={billValue}
        name="bill"
        onChange={onChange}
        setInputError={setInputError}
        setBillError={setBillError}

      
      />
      <h2 className="py-2 mt-4 text-primary-Dark-grayish-cyan font-bold">
        Select Tip %
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
        <TipButton percentValue={5} value={0.05} onClick={onClick} />
        <TipButton percentValue={10} value={0.1} onClick={onClick} />
        <TipButton percentValue={15} value={0.15} onClick={onClick} />
        <TipButton percentValue={25} value={0.25} onClick={onClick} />
        <TipButton percentValue={50} value={0.5} onClick={onClick} />
        <CustomInput value={customValue} onChange={onChange} />
      </div>
      <div>
        <Input
          title="Number of People"
          icon={PersonIcon}
          value={peopleValue}
          name="people"
          onChange={onChange}
          setInputError={setInputError}
          setPeopleError={setPeopleError}
        
        />
      </div>
    </div>
  );
}

export default Form