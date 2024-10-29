import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
const Landing = () => {
  return (
    <div className="w-full h-screen  bg-[#F1F1F1] pt-1">
      <div className="textstructure mt-36 px-20">
        {["we Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker ">
              <div className="w-fit flex items-end overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "8vw" }}
                    transition={{
                      ease: [0.76, 0, 0.24, 1],
                      duration: 1,
                      dealy: 1,
                    }}
                    className="mr-3 mb-[1.19vw] w-[8vw] rounded-md h-[5.7vw] -top-[1.2 vw] relative bg-green-500"
                  ></motion.div>
                )}
                <h1 className="pt-[2vw] -mb-[1vw] uppercase leading-[0.75] text-[9vw] font-['Founders_Grotesk_X'] font-bold ">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-[#D2D2D2] mt-[6.4vw]"></div>
      <div className="flex justify-between items-center px-[3vw] mt-[1vh] text-[#212121] ">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => {
          return (
            <p className="font-['Neue_Montreal'] leading-none hover:cursor-pointer">
              {item}
            </p>
          );
        })}
        <div className="start flex items-center gap-1 font-bold">
          <div className="border-[2px] border-zinc-500 px-3 py-1 capitalize rounded-full hover:cursor-pointer">
            START THE PROJECT
          </div>
          <div className="border-[2px] flex items-center justify-center w-8 h-8 rounded-full  border-zinc-500 hover:cursor-pointer">
            <MdArrowOutward />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
