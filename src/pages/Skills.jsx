import React, { useState } from "react";
import { Link } from "react-router-dom";
import Json from "../../json/data.json";
import "./skills.css";

import { motion } from "framer-motion";
import { transition1 } from "../transition";
import { useContext } from "react";
import { CursorContext } from "../context/CursorContext";

const Skills = () => {
  const { mouserEnter, mouseLeaverEnter } = useContext(CursorContext);
  const [skills, setSkills] = useState(Json.skills);
  console.log("skills", skills);

  return (
    <motion.section
      initial={{ scale: 0, y: "100%" }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0, y: "100%" }}
      transition={transition1}
      className="section "
    >
      <div className="container  mx-auto h-full relative">
        <div
          className="flex flex-col lg:flex-row h-full 
          items-center justify-start gap-x-24 text-center lg:text-left
          pt-24 lg:pt-36 pb-8"
        >
          {/* text */}
          <motion.div
            initial={{ scale: 0, y: "-80%" }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0, y: "-80%" }}
            transition={transition1}
            onMouseEnter={mouserEnter}
            onMouseLeave={mouseLeaverEnter}
            className="flex flex-col lg:items-start"
          >
            <h1 className="h1">Skills</h1>
            <p className=" mb-12 max-w-sm">
              Meine Skills umfassen{" "}
              <b>
                HTML, CSS, SASS, Bootstrap, Tailwind CSS, WindiCSS, JavaScript,
                Node.js und React.
              </b>
              Als angehender Webentwickler in Weiterbildung strebe ich danach,
              <br />
              <br /> meine Fähigkeiten kontinuierlich zu verbessern und komplexe
              Webanwendungen zu entwickeln.
            </p>
            <Link to={"/contact"} className="btn mb-[30px] mx-auto lg:mx-0 ">
              Hire me
            </Link>
          </motion.div>
          {/* img  grid*/}
          <div
            onMouseEnter={mouserEnter}
            onMouseLeave={mouseLeaverEnter}
            className=" skills  p-2  lg:gap-2 md:gap-2 gap-2  gap-y-4"
          >
            {/* img  */}

            {skills &&
              skills.map((skill) => (
                <div
                  className="max-w-[250px] lg:max-w-[320px] rounded-lg
                h-[187px] lg:h-[220px] bg-accent overflow-hidden
                "
                >
                  <img
                    className="object-cover h-full lg:h-[220px] hover:scale-110 
                transition-all duration-500  flex items-center justify-center"
                    src={skill.img}
                    alt={skill.name}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;

{
  /* <div className="container  mx-auto h-full relative">
        {projects.map((project) => (
          <div
            className="flex flex-col lg:flex-row h-full 
          items-center justify-start gap-x-24 text-center lg:text-left
          pt-24 lg:pt-36 pb-8

          "
            key={project.id}
          >
            <h1>{project.name}</h1>
            <p>{project.description}</p>
            <img src={project.img} alt={project.name} />
          </div>
        ))}
      </div> */
}
