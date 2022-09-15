import Image from "next/image";
import ButtonTwitter from "./ButtonTwitter";
import Avatar1 from "../images/userAvatar01.svg";
import HeroImages from "../images/HeroImage1.png";
const Hero = () => {
  return (
    <article className="h-screen w-[100%] max-h-[750px] px-[80px] bg-[#FBF8F3] grid grid-cols-7 items-center">
      <main className="col-span-4">
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-[2.5rem] text-black leading-tight sm:text-sm">
            Twitter analytics taken to a whole new level.
          </h1>
          <p className="leading-relaxed">
            Chirp is a suite of Twitter analytics that will help you better
            understand your audience, which tweets they like, and most
            importantly , when they are the most active on Twitter.
          </p>
          <div className="flex gap-5 mb-5">
            <ButtonTwitter />
            <button className="flex items-center font-bold text-[#1F7898] gap-2">
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
            <div className="absolute top-0 left-2 ">
              <div className="h-8 w-8 relative">
                <Image src={Avatar1} objectFit="fill" layout="fill" />
              </div>
            </div>
            <div className="absolute top-0 left-5">
              <div className="h-8 w-8 relative">
                <Image src={Avatar1} objectFit="fill" layout="fill" />
              </div>
            </div>
            <div className="absolute top-0 left-8">
              <div className="h-8 w-8 relative">
                <Image src={Avatar1} objectFit="fill" layout="fill" />
              </div>
            </div>
            <div className="absolute top-0 left-11 ">
              <div className="h-8 w-8 relative">
                <Image src={Avatar1} objectFit="fill" layout="fill" />
              </div>
            </div>
            <div className="absolute top-0 left-14">
              <div className="h-8 w-8 relative">
                <Image src={Avatar1} objectFit="fill" layout="fill" />
              </div>
            </div>
            <div className="absolute top-0 left-16">
              <div className="h-8 w-8 relative">
                <Image src={Avatar1} objectFit="fill" layout="fill" />
              </div>
            </div>
            <div className="absolute top-0 left-20">
              <div className="h-8 w-8 relative">
                <Image src={Avatar1} objectFit="fill" layout="fill" />
              </div>
            </div>
            <div className="absolute top-0 left-24">
              <div className="h-8 w-8 relative">
                <Image src={Avatar1} objectFit="fill" layout="fill" />
              </div>
            </div>
          </div>
          <div>
            <p className="w-3/4">
              Join <span className="text-[#237A99] font-bold">195</span> others
              who have analyzed their followers and scheduled{" "}
              <span className="text-[#237A99] font-bold">1342</span> tweets!
            </p>
          </div>
        </div>
      </main>
      <div className="flex items-end justify-center col-span-3">
        <div className="max-w-full w-80 max-h-[600px] h-[550px] relative">
          <Image
            src={HeroImages}
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
