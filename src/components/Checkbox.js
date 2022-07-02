import React from "react";

function Checkbox({ isChecked, onHandleChecked, title }) {
  return (
    <div>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => onHandleChecked()}
      />
      <span>{title}</span>
    </div>
  );
}

export default Checkbox;
