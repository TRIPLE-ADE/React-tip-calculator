import React from "react";


function Output({label, amount}) {
  return (
    <div className="flex justify-between items-center mb-12 text-primary-White py-2 font-bold">
      <div>
        <p>{label}</p>
        <p className="text-primary-Light-grayish-cyan">/ Person</p>
      </div>
      <p className="text-3xl font-bold text-primary-Strong-cyan">${amount}</p>
    </div>
  );
}

export default Output;
