import ButtonTwitter from "../components/ButtonTwitter";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-[80px] absolute top-0 left-0 w-[100%]  mt-[30px] bg-transparent">
      <div className="logo">
        <span className="logo text-xl text-[#3180F5] italic font-bold">
          Chirp.
        </span>
      </div>
      <div>
        <ul className="flex justify-center items-center gap-5 font-base">
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
          <ButtonTwitter />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
