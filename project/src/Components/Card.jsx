import React from "react";

const Card = () => {
  return (
    <div className="w-full h-screen flex items-center gap-5 px-[3.8vw]">
      <div className="w-1/2 h-[48vh] ">
        <div className="w-full h-full relative rounded-2xl bg-[#004D43] flex items-center justify-center">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute border-[1px] tracking-tight border-[#CDEA68] rounded-full px-[1.5vh] py-[0.5vh] left-10 text-[#CDEA68] bottom-10">
            ©2019-2020
          </button>
        </div>
      </div>
      <div className="w-1/2 h-[48vh] flex gap-5">
        <div className="w-1/2 h-full relative rounded-2xl bg-[#212121] flex items-center justify-center">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="absolute tracking-tight border-[1px] border-zinc-200 rounded-full px-[1.5vh] py-[0.5vh] left-10 text-zinc-200 bottom-10">
            RATING 5.0 ON CLUTCH
          </button>
        </div>
        <div className="w-1/2 h-full relative  rounded-2xl bg-[#212121] flex items-center justify-center">
          <img
            className="h-[14vh]"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className="absolute capitalize border-[1px] tracking-tight border-white rounded-full px-[1.5vh] py-[0.5vh] left-10 text-white bottom-10">
            BUSINESS BOOTCAMP ALUMINI
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
