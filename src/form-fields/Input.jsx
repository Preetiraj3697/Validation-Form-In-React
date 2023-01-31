/** @format */

import React from "react";
import "./style.css";
import { useState } from "react";
const Input = ({ label, onChange, errorMessage, ...otherprop }) => {
  const [focused, setFocused] = useState(false);
  return (
    <div className="inputField">
      <label>{label}</label>
      <input
                {...otherprop}
                onChange={onChange}
                onBlur={() => setFocused(true)}
                onFocus={() =>
                    otherprop.name === "confirmPassword" && setFocused(true)
                }
                focused={focused.toString()}
            />
      <span>{errorMessage}</span>
    </div>
  );
};

export default Input;
