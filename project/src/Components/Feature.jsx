import React, { useState } from "react";
import { motion } from "framer-motion";
import { Power4 } from "gsap/all";
const Feature = () => {
  //Else use - useAnimation (hook from framer-motion)
  const [ishover1, setHover1] = useState(false);
  const [ishover2, setHover2] = useState(false);
  return (
    <div className="w-full h-screen ">
      <div claaName="Feature font-['Neue_Montreal'] h-[8vh]">
        <h1 className="text-[3.5vw]  font-regular mt-[13vh]  pl-[4vw]">
          Featured projects
        </h1>
        <div className="line border-t-[2px] border-[#B2B2B2] mt-[4vh] "></div>
      </div>
      <div className="px-20 ">
        <div className="card w-full flex gap-10 mt-10 ">
          <div
            onMouseEnter={() => setHover1(true)}
            onMouseLeave={() => setHover1(false)}
            className="container  relative w-1/2 h-[73vh] capitalize "
          >
            <h1 className="absolute flex left-full overflow-hidden -translate-x-1/2 top-1/2 capitalize text-[#CDEA68] z-[9] tracking-tighter text-6xl">
              {"FIDI".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={
                    ishover1 ? { y: "0" } : { y: "100%" } && { opacity: 100 }
                  }
                  transition={{ ease: [0.33, 1, 0.68, 1], delay: index * 0.06 }}
                  className="inline-block -translate-y-full overflow-hidden text-[8vw] font-['Founders_Grotesk_X'] font-semibold "
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="w-full h-full rounded-xl overflow-hidden ">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
          </div>
          <div
            onMouseEnter={() => setHover2(true)}
            onMouseLeave={() => setHover2(false)}
            className="container relative w-1/2 h-[73vh]  "
          >
            <div className="w-full h-full rounded-xl overflow-hidden ">
              <h1 className="absolute right-full flex overflow-hidden translate-x-1/2 top-1/2 capitalize text-[#CDEA68]  z-[10] tracking-tighter text-6xl">
                {"VISI".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={ishover2 ? { y: "0" } : { y: "100%" }}
                    transition={{
                      ease: [0.33, 1, 0.68, 1],
                      delay: index * 0.06,
                    }}
                    className="inline-block overflow-hidden -translate-y-full text-[8vw] font-['Founders_Grotesk_X'] font-semibold"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
