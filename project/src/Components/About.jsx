import React from "react";

const About = () => {
  return (
    <div>
      <div className="w-full py-20 rounded-l-3xl rounded-r-3xl bg-[#CDEA68]">
        <div className="para font-['Neue_Montreal'] ">
          <p class="p1 text-[3vw] leading-[3vw] px-20 pb-[3vw]">
            Ochi is a strategic presentation agency for forward-thinking
            businesses that need to <u>raise funds</u>, <u>sell prod­ucts</u>,{" "}
            <u>ex­plain com­plex ideas</u>, and <u>hire great peo­ple</u>.
          </p>
        </div>
        <div className="line border-t-[1px] border-[#99AD53] "></div>
        <div className="flex justify-between mt-[1vw] mx-[3.5vw] ">
          <div className="approach font-['Neue_Montreal']">
            <h1 className="text-[3.5vw]">Our approach</h1>
            <button className="border-1 rounded-full p-[1vw]  px-[1vw] z-[99] bg-[#212121] flex items-center gap-9 text-white">
              READ MORE
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </button>
          </div>
          <div className="h-[70vh] rounded-xl">
            <img
              src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
