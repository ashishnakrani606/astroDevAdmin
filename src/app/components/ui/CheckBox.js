import React from "react";

const CheckBox = ({ children, name, className, onChange, value = "", checked ,labelClass }) => {
  return (
    <>
      <div className={`checkbox-icon inline-block relative ${className}`}>
        <input
          className={`styled-checkbox`}
          id={name}
          onChange={onChange}
          type="checkbox"
          value={value}
          checked={checked}
        />
        <label htmlFor={name} className={`relative cursor-pointer text-sm flex sm:items-center ${labelClass}`}>
          {children}
        </label>
      </div>
    </>
  );
};

export default CheckBox;
