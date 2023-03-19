import React from "react";

export function ResetButton({onClick}){
    return (
      <button
        type="submit"
        className="block w-full text-center mt-5 md:mt-20 text-lg tracking-wider font-bold py-2 text-primary-Very-dark-cyan bg-primary-Strong-cyan hover:bg-primary-Light-grayish-cyan rounded-md" onClick={onClick}
      >
        RESET
      </button>
    );
}

export function TipButton({percentValue, value, onClick}) {
    return (
      <button
        type="submit" value={value} onClick={onClick}
        className="block text-white py-2 tracking-widest text-lg bg-primary-Very-dark-cyan hover:bg-primary-Strong-cyan hover:text-primary-Very-dark-cyan focus:text-primary-Very-dark-cyan focus:bg-primary-Light-grayish-cyan rounded-md font-bold">
        {percentValue}% 
      </button>
    );
 
}
