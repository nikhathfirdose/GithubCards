import React from "react";

function Button({ onClickFunc, value }) {
  return (
    <div>
      <button onClick={() => onClickFunc(value)}>+{value}</button>
    </div>
  );
}

export default Button;
