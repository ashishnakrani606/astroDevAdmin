import React from "react";
import Image from "next/image";
import Link from "next/link";
import AuthLogo from "@/assets/images/icon/authlogo.svg";

function Auth({ children ,className ,authClass ,imageClass }) {
  return (
    <div className={`bg-white mx-auto relative rounded-2xl sm:pr-[52px] sm:pl-[53px] sm:pb-[17px] sm:pt-[47px] p-5 w-full ${className}`}>
      <Image src={AuthLogo} alt="" className={`${imageClass}`}/>
      <div className="flex justify-between flex-col h-[calc(100%-41px)]">
        {children}
        <div className={`md:mt-[60px] mt-10 text-black/60 dark:text-black/60 ${authClass}`}>
          <ul className="flex justify-end text-sm gap-5">
            <li>
              <Link href={""} className="whitespace-nowrap">Help</Link>
            </li>
            <li>
              <Link href={""} className="whitespace-nowrap">Privacy Policy</Link>
            </li>
            <li>
              <Link href={""} className="whitespace-nowrap">Terms of Use</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Auth;
