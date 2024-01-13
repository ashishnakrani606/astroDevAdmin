import React from "react";

const InputContent = ({ children, title, className, titlestyle, Id }) => {
  return (
    <div
      className={`bg-white dark:bg-black/40 dark:border-white/10 border border-black/10 rounded-lg py-4 px-5 mb-4 break-words ${className} `}
      id={`${Id}`}
    
    >
      {/* <h4 className={`${titlestyle} text-black/40 dark:text-white/40 capitalize text-xs mb-2`}>{title}</h4> */}
      {children}
    </div>
  );
};
export default InputContent;
