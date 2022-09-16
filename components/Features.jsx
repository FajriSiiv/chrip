import React from "react";

const Features = () => {
  return (
    <article className="px-[80px] py-[50px] md:px-10 sm:!px-4">
      <h2 className="text-3xl mb-8  font-bold text-black sm:!text-2xl">
        Features that help you <br className="sm:!hidden" /> Tweet smarter.
      </h2>
      <div className="grid grid-cols-2 grid-rows-2 gap-6 text-black md:grid-cols-1">
        <div className="px-4 py-2 border-[1px]  border-gray-300 rounded-[4px]">
          <div className="h-8 w-8 flex items-center mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
              />
            </svg>
          </div>
          <h3 className="font-bold  my-2">Analytics</h3>
          <p className="text-sm leading-relaxed text-[#737373] sm:!text-xs ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
            eum vero vel architecto necessitatibus! Facilis, fuga repudiandae
            quasi veritatis, maxime voluptate corrupti
          </p>
        </div>
        <div className="px-4 py-2 border-[1px] border-gray-300 rounded-[4px]">
          <div className="h-8 w-8 flex items-center mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
              />
            </svg>
          </div>
          <h3 className="font-bold  my-2">Smart Analyzer</h3>
          <p className="text-sm leading-relaxed text-[#737373] sm:!text-xs">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
            eum vero vel architecto necessitatibus! Facilis, fuga repudiandae
            quasi veritatis, maxime voluptate corrupti
          </p>
        </div>
        <div className="px-4 py-2 border-[1px] border-gray-300 rounded-[4px]">
          <div className="h-8 w-8 flex items-center mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
              />
            </svg>
          </div>
          <h3 className="font-bold  my-2">Schedule Your Tweets</h3>
          <p className="text-sm leading-relaxed text-[#737373] sm:!text-xs">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
            eum vero vel architecto necessitatibus! Facilis, fuga repudiandae
            quasi veritatis, maxime voluptate corrupti
          </p>
        </div>
        <div className="px-4 py-2 border-[1px] border-gray-300 rounded-[4px]">
          <div className="h-8 w-8 flex items-center mt-2">
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
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
          </div>
          <h3 className="font-bold  my-2">Dark Mode</h3>
          <p className="text-sm leading-relaxed text-[#737373] sm:!text-xs">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
            eum vero vel architecto necessitatibus! Facilis, fuga repudiandae
            quasi veritatis, maxime voluptate corrupti
          </p>
        </div>
      </div>
    </article>
  );
};

export default Features;
