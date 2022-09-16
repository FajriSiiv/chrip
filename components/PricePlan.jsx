import Image from "next/image";
import React from "react";

import CheckMark from "../images/Checkmark.svg";
import ButtonTwitter from "./ButtonTwitter";

const benefitD = [
  { text: "Unlimited* scheduled tweets and threads." },
  { text: "Schedule up to 3 weeks in advance." },
  { text: "Real-time audience analytics tracking up to 5k followers." },
];

const PricePlan = () => {
  return (
    <article className="py-2 md:px-10 sm:!px-4">
      <div className="text-center w-1/3 mx-auto py-9 md:w-full">
        <h2 className="text-2xl font-bold text-black sm:!text-xl">
          One simple price plan.
        </h2>
        <p className="text-xs py-2">
          Start growing your twitter account by analyzing your follower{"'"}s
          patterns
        </p>
      </div>
      <div className=" rounded-lg w-1/3 mx-auto p-6 bg-[#FBF8F3] border-[1px] border-[#FFAF29] md:w-4/5 md:max-w-[450px] sm:!w-full sm:!p-4">
        <div className="flex flex-col items-start pb-2">
          <span>Monthly</span>
          <span className="">
            <strong className="text-4xl text-black">$9</strong>/mo
          </span>
        </div>
        <hr />
        <div className="flex flex-col pt-3 pb-3 gap-y-4  ">
          {benefitD.map((u, i) => (
            <div key={i++} className="flex flex-row items-start gap-x-3 w-full">
              <div className="w-[10%] h-5 relative">
                <Image
                  src={CheckMark}
                  layout="fill"
                  objectFit="fill"
                  alt="checkmark"
                />
              </div>
              <p className="text-sm leading-relaxed w-[90%] sm:!text-[13px]">
                {u.text}
              </p>
            </div>
          ))}
        </div>
        <hr className="mb-3" />
        <ButtonTwitter width="100%" text="Start Trial with Twitter" />
      </div>
    </article>
  );
};

export default PricePlan;
