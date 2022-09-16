import Image from "next/image";
import { useState } from "react";
import ButtonTwitter from "../components/ButtonTwitter";
import Menu from "../images/Menu.svg";
const Navbar = () => {
  const [menuBar, setMenuBar] = useState(false);

  const menuClick = () => {
    if (menuBar === false) {
      setMenuBar(true);
    } else {
      setMenuBar(false);
    }
  };
  return (
    <div className="flex justify-between items-center px-[80px] absolute top-0 left-0 w-[100%] pt-6 bg-transparent md:px-5 ">
      <div className="logo">
        <span className="logo text-xl text-[#3180F5] italic font-bold md:text-base">
          Chirp.
        </span>
      </div>
      <div
        className={`sm:absolute sm:top-0 sm:left-0 sm:z-10 sm:bg-white sm:w-full sm:h-96 sm:flex sm:justify-center transition-all ${
          menuBar ? "sm:translate-y-0" : "sm:translate-y-[-100%]"
        }`}
      >
        <ul className="flex justify-center items-center gap-5 font-base md:text-sm md:gap-3  sm:!flex-col sm:!gap-y-5">
          <li>
            <a href="#" rel="norefferer">
              Home
            </a>
          </li>
          <li>
            <a href="#" rel="norefferer">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" rel="norefferer">
              FAQ
            </a>
          </li>
          <li>
            <ButtonTwitter />
          </li>
        </ul>
      </div>
      <div className="hidden sm:block z-20" onClick={menuClick}>
        <div className="w-4 h-4 relative">
          <Image src={Menu} alt="menu" layout="fill" objectFit="contain" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
