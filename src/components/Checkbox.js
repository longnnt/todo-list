import React from "react";
import { useSelector } from "react-redux";
import { statusState } from "../features/filter/filterSlice";
import "../css/Checkbox.css";

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
      <span
        className={
          statusCheckbox === title ? `color-checked` : `color-un-checked`
        }
      >
        {title}
      </span>
    </div>
  );
}

export default Checkbox;
