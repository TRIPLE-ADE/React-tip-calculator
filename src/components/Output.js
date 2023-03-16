import React from "react";


function Output({label, amount}) {
  return (
    <div>
      <div>
        <p>{label}</p>
        <p>/Person</p>
      </div>
      <p>{amount}</p>
    </div>
  );
}

export default Output;
