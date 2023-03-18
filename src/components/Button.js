import React from "react";

export function ResetButton(){
    return (
      <button
        type="submit"
        className="block w-full text-center mt-20 text-lg tracking-wider font-bold py-2 text-primary-Very-dark-cyan bg-primary-Strong-cyan rounded-md"
      >
        RESET
      </button>
    );
}

export function TipButton({percentValue}) {
    return (
      <button
        type="submit"
        className="block text-white py-2 tracking-widest text-lg bg-primary-Very-dark-cyan hover:bg-primary-Strong-cyan rounded-md font-bold">
        {percentValue}%
      </button>
    );
 
}
