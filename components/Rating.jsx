import Image from "next/image";
import React from "react";
import Ava1 from "../images/userAvatar01.svg";
import Ava2 from "../images/userAvatar05.svg";
import Ava3 from "../images/userAvatar07.svg";
import Twitter from "../images/TwitterBlue.svg";
import Like from "../images/Like.svg";

const customers = [
  {
    name: "Sara May",
    sosmed: "sara_may",
    photo: Ava1,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic suntsoluta totam! Lorem, ipsum.",
    like: 2,
    date: "March 2, 2021",
  },
  {
    name: "Jack Scott",
    sosmed: "jackscott_",
    photo: Ava3,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ullam quae ab dolorem ea perspiciatis porro molestias, quia sed? Cupiditate aliquid necessitatibus a ducimus autem ex aspernatur officiis nam, animi similique ratione numquam! Veritatis laudantium sed sint eligendi harum deserunt repellendus tenetur, doloremque enim sunt distinctio et vero autem consequuntur.",
    like: 32,
    date: "March 2, 2021",
  },
  {
    name: "Jessica May",
    sosmed: "jmay09",
    photo: Ava2,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic suntsoluta totam! Lorem, ipsum.",
    like: 20,
    date: "March 2, 2021",
  },
];

const Rating = () => {
  return (
    <article className="px-[80px] bg-[#D7F5F5]  py-10 inline-block">
      <h2 className="pb-10 text-3xl font-bold text-black">
        What our customers say
      </h2>
      <div className="grid grid-cols-3 gap-x-5">
        {customers.map((e, i) => (
          <div key={i++} className="bg-white text-black p-4 rounded-md h-fit">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-14 h-14 relative">
                  <Image
                    src={e.photo}
                    layout="fill"
                    objectFit="contain"
                    alt="photo"
                  />
                </div>
                <div className="flex flex-col pl-2 ">
                  <strong className="text-sm">{e.name}</strong>
                  <span className="text-xs text-[#7F7F7F]">@{e.sosmed}</span>
                </div>
              </div>
              <div className="w-5 h-5 relative ">
                <Image
                  src={Twitter}
                  layout="fill"
                  objectFit="contain"
                  alt="twitter"
                />
              </div>
            </div>
            <div className="pt-3 text-[#7F7F7F] font-medium">
              <p className="text-xs  leading-relaxed">{e.text}</p>
            </div>
            <div className="pt-2 flex items-center justify-between text-[#7F7F7F]">
              <div className="flex items-center">
                <div className="relative h-4 w-4">
                  <Image
                    src={Like}
                    layout="fill"
                    objectFit="contain"
                    alt="like"
                  />
                </div>
                <small className="pl-1">{e.like}</small>
              </div>
              <div>
                <span className="text-[14px]">{e.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};

export default Rating;
