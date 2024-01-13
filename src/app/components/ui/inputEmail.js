import React, { useState } from "react";
import InputContent from "../../components/ui/InputContent";

function IputeEmail({ defaultValue, placeholder, className, inputStyle, readOnly }) {
  const [isValid, setIsValid] = useState(true);
  const emailRegex = /\S+@\S+\.\S+/;
  const validateEmail = (event) => {
    const email = event.target.value;
    if (emailRegex.test(email)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
    
  };
  return (
    <InputContent
      className={`${className} ${
        isValid
          ? "success"
          : " !border-secondary-red !text-secondary-red dark:!border-secondary-red dark:!text-secondary-red"
      }`}
    >
      <input
        type="email"
        placeholder={placeholder}
        onChange={validateEmail}
        readOnly={readOnly}
        defaultValue={defaultValue}
        className={`dark:bg-transparent w-full text-sm outline-none text-black ${inputStyle} ${
          isValid ? "dark:text-blacklight " : "dark:!text-secondary-red !text-secondary-red"
        }`}
      />
    </InputContent>
  );
}

export default IputeEmail;
