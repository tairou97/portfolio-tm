import React from "react";
import Img from "../img/contact/ta.png";
import { motion } from "framer-motion";
import { transition1 } from "../transition";

import { useContext } from "react";
import { CursorContext } from "../context/CursorContext";

const Contact = () => {
  const { mouserEnter, mouseLeaverEnter } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ scale: 0, y: "100%" }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0, y: "100%" }}
      transition={transition1}
      section
      className="section bg-white"
    >
      <div className="conatiner max-auto h-full">
        <div
          className="flex flex-col  lg:flex-row h-full items-center  justify-start pt-36 gap-x-8 text-center
        lg:text-left"
        >
          {/* bg */}
          <motion.div
            initial={{ scale: 0, y: "100%" }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0, y: "100%" }}
            transition={transition1}
            onMouseEnter={mouserEnter}
            onMouseLeave={mouseLeaverEnter}
            className="hidden lg:flex bg-[#eef7f9]  absolute bottom-0 left-0  right-0 top-72 -z-10"
          ></motion.div>
          {/* text & from */}
          <div
            onMouseEnter={mouserEnter}
            onMouseLeave={mouseLeaverEnter}
            className="lg:flex-1 lg:pt-32 px-4"
          >
            <h1 className="h1">Contact me</h1>
            <p className="mb-12">I would love to get suggestions from you.</p>
            {/* form */}
            <form className="flex flex-col gap-y-4">
              <div className=" flex gap-x-10">
                <input
                  className="outline-none border-b  border-b-primary h-[60px] 
                  bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                  type="text"
                  placeholder="Your name"
                />
                <input
                  className="outline-none border-b  border-b-primary h-[60px] 
                  bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                  type="text"
                  placeholder="Your email  address"
                />
              </div>
              <input
                className="outline-none border-b  border-b-primary h-[60px] 
                  bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                type="text"
                placeholder="Your message"
              />
              <button className="btn mb-[30px] mx-auto lg:mx-0 self-start">
                Send
              </button>
            </form>
          </div>
          {/* img */}
          <motion.div
            onMouseEnter={mouserEnter}
            onMouseLeave={mouseLeaverEnter}
            initial={{ scale: 0, y: "100%" }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0, y: "100%" }}
            transition={{ transition: transition1, duration: 1.5 }}
            className="lg:flex-1"
          >
            <img src={Img} alt="" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
