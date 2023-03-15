import React from "react";

export function TipButton({percentValue}) {
    return (
      <button
        type="button"
        className="block text-white py-2 bg-primary-Very-dark-cyan hover:bg-primary-Strong-cyan rounded-md"
      >
        {percentValue}%
      </button>
    );
 
}
