import Image from "next/image";
import React from "react";
import Twitter from "../images/Twitter.svg";

const ButtonTwitter = () => {
  return (
    <>
      <li className="flex items-center bg-[#1DA1F2] h-10 px-4 gap-3 rounded-md">
        <div className="w-4 h-4 relative flex items-center">
          <Image src={Twitter} objectFit="fill" layout="fill" alt="twitter" />
        </div>
        <button className="text-white leading-none text-sm font-semibold tracking-wide">
          Sign in with Twitter
        </button>
      </li>
    </>
  );
};

export default ButtonTwitter;
