import React from "react";
import { useSelector } from "react-redux";
import { statusState } from "../features/filterReducer";

function Checkbox({ isChecked, onHandleChecked, title }) {
  const statusCheckbox = useSelector(statusState);
  if (isChecked || statusCheckbox === title) {
    isChecked = true;
  } else {
    isChecked = false;
  }
  return (
    <div>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => onHandleChecked(title)}
      />
      <span>{title}</span>
    </div>
  );
}

export default Checkbox;
