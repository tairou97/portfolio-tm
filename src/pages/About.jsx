import React from "react";
import TImg from "../img/header/t.png";
import Lebenslauf from "../img/about/leb.pdf";
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
      className="section  "
      id="about"
    >
      <div className="container mx-auto h-full ">
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
            onMouseEnter={mouserEnter}
            onMouseLeave={mouseLeaverEnter}
            className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start"
          >
            <h1 className="h1">About me</h1>
            <p className=" mb-12 max-w-sm">
              Ich bin ein angehender Webentwickler, der sich in einer
              Weiterbildung befindet. Bisher habe ich <b>HTML, CSS, SASS,</b>
              <br /> <br />
              <b>
                {" "}
                Bootstrap, Tailwind CSS, WindiCSS, JavaScript, Node.js und React
              </b>
              erlernt. Mein Ziel ist es, meine Fähigkeiten weiter auszubauen und
              komplexe Webanwendungen zu entwickeln.
            </p>
            <div className="flex gap-5 flex-wrap justify-center">
              {" "}
              <Link to={"/projects"} className="btn">
                View my work
              </Link>
              <Link to={Lebenslauf} target="_blank" className="btn mb-[30px]">
                my resume
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
