import Image from "next/image";
import React from "react";
import Twitter from "../images/TwitterBlack.svg";
const Footer = () => {
  return (
    <div className="bg-[#D7F5F5] flex justify-between px-[80px] item-center py-4 mt-10 md:px-5  sm:!flex-col sm:gap-y-3">
      <span className="font-bold italic text-[#3180F5] ">Chrip.</span>
      <div className="flex items-center">
        <div className="relative h-5 w-5 mr-5 md:mr-3 md:h-4 md:w-4">
          <Image src={Twitter} layout="fill" objectFit="contain" />
        </div>
        <ul className="flex gap-x-4 font-semibold text-black md:gap-x-2 md:text-sm">
          <li>Privacy Police</li>
          <li>Terms of Use</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
