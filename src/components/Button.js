import React from "react";

export function ResetButton(){
    return (
      <button
        type="submit"
        className="block w-full text-center text-lg tracking-wider font-bold py-2 mt-28 text-primary-Very-dark-cyan bg-primary-Strong-cyan rounded-md"
      >
        Reset
      </button>
    );
}

export function TipButton({percentValue}) {
    return (
      <button
        type="button"
        className="block text-white py-2 bg-primary-Very-dark-cyan hover:bg-primary-Strong-cyan rounded-md font-bold"
      >
        {percentValue}%
      </button>
    );
 
}
