import Image from "next/image";
import React from "react";

import CheckMark from "../images/Checkmark.svg";
import ButtonTwitter from "./ButtonTwitter";
const PricePlan = () => {
  return (
    <article className="py-2">
      <div className="text-center w-1/3 mx-auto py-9">
        <h2 className="text-2xl font-bold text-black">
          One simple price plan.
        </h2>
        <p className="text-xs py-2">
          Start growing your twitter account by analyzing your follower{"'"}s
          patterns
        </p>
      </div>
      <div className=" rounded-lg w-1/3 mx-auto p-6 bg-[#FBF8F3] border-[1px] border-[#FFAF29]">
        <div className="flex flex-col items-start pb-2">
          <span>Monthly</span>
          <span className="">
            <strong className="text-4xl text-black">$9</strong>/mo
          </span>
        </div>
        <hr />
        <div className="flex flex-col pt-3 pb-3 gap-y-2">
          <div className="flex items-start gap-x-3">
            <div className="h-4 w-4 relative">
              <Image
                src={CheckMark}
                layout="fill"
                objectFit="contain"
                alt="checkmark"
              />
            </div>
            <p className="text-xs leading-relaxed">
              Unlimited* scheduled tweets and threads.
            </p>
          </div>
          <div className="flex items-start gap-x-3">
            <div className="h-4 w-4 relative ">
              <Image
                src={CheckMark}
                layout="fill"
                objectFit="contain"
                alt="checkmark"
              />
            </div>
            <p className="text-xs leading-relaxed">
              Schedule up to 3 weeks in advance.
            </p>
          </div>
          <div className="flex items-start gap-x-3">
            <div className="h-4 w-4 relative ">
              <Image
                src={CheckMark}
                layout="fill"
                objectFit="contain"
                alt="checkmark"
              />
            </div>
            <p className="text-xs leading-relaxed whitespace-pre-wrap">
              Real-time audience analytics tracking <br /> up to 5k followers.
            </p>
          </div>
        </div>
        <hr />
        <ButtonTwitter text="Start Trial with Twitter" />
      </div>
    </article>
  );
};

export default PricePlan;
