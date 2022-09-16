import Image from "next/image";
import ButtonTwitter from "./ButtonTwitter";
import Avatar1 from "../images/userAvatar01.svg";
import Avatar2 from "../images/userAvatar02.svg";
import Avatar3 from "../images/userAvatar03.svg";
import Avatar4 from "../images/userAvatar04.svg";
import Avatar5 from "../images/userAvatar05.svg";
import Avatar6 from "../images/userAvatar06.svg";
import Avatar7 from "../images/userAvatar07.svg";
import Avatar8 from "../images/userAvatar08.svg";
import Avatar9 from "../images/userAvatar09.svg";
import HeroImages from "../images/HeroImage1.png";
import HeroImagesMD from "../images/HeroTB.png";

const avatarUser = [
  { photo: Avatar1, alt: "Avatar 1" },
  { photo: Avatar2, alt: "Avatar 2" },
  { photo: Avatar3, alt: "Avatar 3" },
  { photo: Avatar4, alt: "Avatar 4" },
  { photo: Avatar5, alt: "Avatar 5" },
  { photo: Avatar6, alt: "Avatar 6" },
  { photo: Avatar7, alt: "Avatar 7" },
  { photo: Avatar8, alt: "Avatar 8" },
  { photo: Avatar9, alt: "Avatar 9" },
];

const Hero = () => {
  return (
    <article className="h-screen w-[100%] max-h-[750px] px-[80px] bg-[#FBF8F3] grid grid-cols-7 items-center md:flex md:flex-col-reverse md:max-h-[1000px] md:h-[1000px] md:justify-center md:gap-y-7 md:px-10 sm:!px-4 sm:!h-[1100px] sm:!max-h-[1100px]">
      <main className="col-span-4">
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-[2.5rem] text-black leading-tight sm:!text-2xl md:text-4xl">
            Twitter analytics taken to a whole new level.
          </h1>
          <p className="leading-relaxed  sm:text-sm">
            Chirp is a suite of Twitter analytics that will help you better
            understand your audience, which tweets they like, and most
            importantly , when they are the most active on Twitter.
          </p>
          <div className="flex gap-5 mb-5 sm:flex-col">
            <ButtonTwitter />
            <button className="flex items-center font-bold text-[#1F7898] gap-2 justify-center">
              Learn More{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="grid grid-rows-2">
          <div className="relative flex min-h-[50px]">
            {avatarUser.map((u, i) => (
              <div
                key={i + 1}
                className={`absolute top-0 `}
                style={{
                  left: `${i * 15 + 2}px`,
                }}
              >
                <div className="h-8 w-8 md:w-11 md:h-11 sm:!w-8 sm:!h-8 relative">
                  <Image
                    src={u.photo}
                    objectFit="fill"
                    layout="fill"
                    alt={u.alt}
                  />
                </div>
              </div>
            ))}
          </div>
          <div>
            <p className="w-3/4 sm:w-full sm:text-xs">
              Join <span className="text-[#237A99] font-bold">195</span> others
              who have analyzed their followers and scheduled{" "}
              <span className="text-[#237A99] font-bold">1342</span> tweets!
            </p>
          </div>
        </div>
      </main>
      <div className="flex items-end justify-center col-span-3 md:hidden sm:!flex">
        <div className="max-w-full w-80 max-h-[600px] h-[550px] relative sm:w-[400px] sm:h-96">
          <Image
            src={HeroImages}
            objectFit="contain"
            layout="fill"
            alt="hero image"
          />
        </div>
      </div>
      <div className="hidden max-h-[400px] h-[400px] mt-8 w-full md:flex sm:!hidden">
        <div className="h-[100%] w-[100%] relative  ">
          <Image
            src={HeroImagesMD}
            objectFit="contain"
            layout="fill"
            alt="hero image"
          />
        </div>
      </div>
    </article>
  );
};

export default Hero;
