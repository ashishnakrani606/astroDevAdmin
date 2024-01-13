import React, { Children } from "react";

function Button(props) {
  return (
    <>
      <button
        className={`btn transition-all duration-500 text-xs px-2 py-[6px] rounded-lg leading-[18px]  
          ${props.secondary == "true" ? "text-blacklight dark:text-white" : "text-white"}
          ${
            props.color == "yellow"
              ? "bg-secondary-yellow !text-blacklight hover:bg-[#ffe380] dark:hover:bg-[#ffeeb3]"
              : "" || props.color == "grey"
              ? "bg-primary-purple !text-blacklight hover:bg-[#eef2f6] dark:hover:bg-[#404040]"
              : "" || props.color == "greydark"
              ? "bg-gray-1 hover:bg-black dark:hover:bg-[#333333]"
              : "" || props.color == "blue"
              ? "text-blacklight bg-primary-blue"
              : "" || props.color == "red"
              ? "bg-red-300"
              : "" || props.color == "winered"
              ? "bg-secondary-redb"
              : "" || props.color == "secondary-red"
              ? "bg-secondary-red hover:bg-[#ff3333] dark:hover:bg-[#ff6666]"
              : "" || props.color == "redlight"
              ? "bg-secondary-red/70 text-white hover:bg-[#fa6b6e]"
              : "" || props.color == "lightgrey"
              ? "bg-black/5 dark:bg-white/5 text-blacklight dark:text-white hover:bg-[#e3e6e8] dark:hover:!bg-[#404040]"
              : "" || props.color == "lightgreen"
              ? "text-black bg-secondary-greenb hover:bg-[#a4eba9]"
              : "" || props.color == "primarygreen"
              ? "bg-primary-greenb hover:bg-[#26a65b] text-white dark:hover:bg-[#2abb67]"
              : "" || props.color == "green"
              ? " bg-primary-green hover:bg-[#1c7d46] dark:hover:bg-[#25a75d]"
              : "" || props.color == "bluedark"
              ? " bg-blue-1 text-white"
              : "" || props.color == "teal"
              ? "text-blacklight bg-secondary-greena hover:bg-[#89dcbe] dark:hover:bg-[#b0e8d3]"
              : "" || props.color == "blacklight"
              ? "text-white bg-blacklight dark:bg-secondary-purpleb dark:text-blacklight dark:hover:bg-[#b8b8e6] hover:bg-opacity-90"
              : "" || props.color == "purple"
              ? "bg-secondary-purplea text-white dark:!text-blacklight hover:bg-[#8395fb] dark:hover:!bg-[#b5c0fd]"
              : ""
          } 
          ${props.outline == "true" ? `border !bg-transparent` : ""}
          ${
            props.outline == "true" && props.color == "red"
              ? "border-secondary-red !text-secondary-red hover:!bg-[#ffe6e6] dark:hover:!bg-[#404040]"
              : "" || (props.outline == "true" && props.color == "grey")
              ? "border-black/10 text-blacklight dark:!border-white/10 dark:!text-white hover:!bg-[#eef2f6] dark:hover:!bg-[#404040]"
              : "" || (props.outline == "true" && props.color == "blacklight")
              ? "border-black/20 text-blacklight dark:!border-white/20 dark:!text-white"
              : ""
          }
          ${props.disable == "true" ? `opacity-30 cursor-auto pointer-events-auto          
          pointer-events: none;` : ""}
          ${
            props.size == "large"
              ? "px-3 !py-2 leading-[20px]"
              : "" || props.size == "medium"
              ? "px-2 !py-1 text-sm"
              : "" || props.size == "small"
              ? "px-2 !py-[5px]"
              : ""
          } 
          ${props.className}`}

        onClick={props.onClick}
        type={props.type}
      >
        {props.name}
        {props.children}
      </button>
    </>
  );
}

export default Button;
