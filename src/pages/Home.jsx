import React, { useContext } from "react";
import TImg from "../img/header/tbw.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transition";

import { CursorContext } from "../context/CursorContext";

const Home = () => {
  const { mouserEnter, mouseLeaverEnter } = useContext(CursorContext);

  return (
    <motion.section
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={transition1}
      className="section "
    >
      <div
        onMouseEnter={mouserEnter}
        className=" container mx-auto h-full relative "
      >
        {/* text & img wrapper */}
        <div className="  flex flex-col justify-center ">
          {/* text */}
          <motion.div
            initial={{ scale: 0, y: "-50%" }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0, y: "-50%" }}
            transition={transition1}
            onMouseEnter={mouserEnter}
            onMouseLeave={mouseLeaverEnter}
            className="w-full pt-36 pb-14 lg:pt-0 lg:pb-0
          lg:w-auto  z-10 lg:absolute flex flex-col justify-center items-center lg:items-start "
          >
            <h1 className="h1 ">
              Web Developer <br /> & Hobby Fashion Designer
            </h1>
            <p
              className="text-[26px] lg:text-[36px] 
            font-primary mb-4 lg:mb-12"
            >
              Berlin, Germany
            </p>
            <div className="flex gap-5">
              <Link to={"/contact"} className="btn mb-[30px]">
                hire me
              </Link>
              <Link
                to="mailto:deine_email@example.com"
                className="btn mb-[30px]"
              >
                contact me
              </Link>
            </div>
          </motion.div>
          {/* img */}
          <div className="flex justify-end  max-h-96 lg:max-h-max">
            {/* <div className="flex justify-end "> */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={transition1}
              className=" relative lg:-right-40 overflow-hidden    "
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={transition1}
                src={TImg}
                alt=""
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
