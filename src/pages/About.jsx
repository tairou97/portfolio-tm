import React from "react";
import TImg from "../img/header/t.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transition";
import { useContext } from "react";
import { CursorContext } from "../context/CursorContext";

const About = () => {
  const { mouserEnter, mouseLeaverEnter } = useContext(CursorContext);

  return (
    <motion.section
      initial={{ scale: 0, y: "100%" }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0, y: "100%" }}
      transition={transition1}
      className="section"
    >
      <div
        onMouseEnter={mouserEnter}
        onMouseLeave={mouseLeaverEnter}
        className="container mx-auto h-full relative"
      >
        {/* text & img wrapper */}
        <div
          className=" flex flex-col lg:flex-row  
        h-full items-center justify-center gap-x-24 
        text-center lg:text-left lg:pt-16"
        >
          {/* img */}
          <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:oder-none overflow-hidden">
            <img src={TImg} alt="" />
          </div>
          {/* text */}
          <motion.div
            initial={{ scale: 0, y: "-80%" }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0, y: "-80%" }}
            transition={transition1}
            className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start"
          >
            <h1 className="h1">About me</h1>
            <p className=" mb-12 max-w-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
              perspiciatis libero ratione hic iusto voluptatum assumenda
              <b> quisquam et ipsa beatae </b>
              atque sunt vel saepe impedit nobis tempore? Voluptates,
              praesentium ad.
              <br />
              <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis velit asperiores aspernatur ratione nihil, eos odio
              possimus veritatis at officiis ex molestias. Reprehenderit error
              tenetur, officiis quia facere sed consequuntur?
            </p>
            <Link to={"/projects"} className="btn">
              View my work
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
