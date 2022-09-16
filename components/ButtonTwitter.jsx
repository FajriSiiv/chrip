import Image from "next/image";
import React from "react";
import Twitter from "../images/Twitter.svg";

const ButtonTwitter = ({ text, width }) => {
  return (
    <>
      <button
        className={`flex items-center justify-center bg-[#1DA1F2] h-10 px-4 gap-3 rounded-md md:h-9 md:px-2 w-${
          width ? `[${width}]` : "auto"
        }`}
      >
        <div className="w-4 h-4 relative flex items-center ">
          <Image src={Twitter} objectFit="fill" layout="fill" alt="twitter" />
        </div>
        <p className="text-white leading-none text-sm font-semibold tracking-wide md:text-xs">
          {text ? text : "Sign in with Twitter"}
        </p>
      </button>
    </>
  );
};

export default ButtonTwitter;
