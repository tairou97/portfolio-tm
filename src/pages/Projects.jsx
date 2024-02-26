import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Json from "../img/projects/project.json";
import "../pages/project.css";
import { motion } from "framer-motion";
import { transition1 } from "../transition";
import { useContext } from "react";
import { CursorContext } from "../context/CursorContext";

const Projects = () => {
  const { mouserEnter, mouseLeaverEnter } = useContext(CursorContext);
  const [projects, setProjects] = useState(Json.projects);
  console.log("projects", projects);

  return (
    <motion.section
      initial={{ scale: 0, y: "100%" }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0, y: "100%" }}
      transition={transition1}
      className="section flex items-center justify-center  bg-[#f5f5f5]"
    >
      <div className="container  mx-auto h-full ">
        <div
          className="h-full 
    gap-x-24 text-center lg:text-left
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
            className="flex flex-col lg:items-center w-full  "
          >
            <h1 className="h1">Projects</h1>
            <p className=" mb-12 max-w-xl p-1 text-center">
              Als Webentwickler entwickle ich maßgeschneiderte Lösungen für
              Kunden und Benutzer. In Zusammenarbeit mit Designern gestalte ich
              innovative Webanwendungen, kommuniziere mit Kunden, plane und
              entwickle Projekte sowie sichere die Zuverlässigkeit der
              Anwendungen. Durch <br /> <br /> kontinuierliche Weiterbildung
              halte ich mich über neue Technologien auf dem Laufenden, um stets
              innovative Lösungen anzubieten. Die Arbeit als Webentwickler ist
              für mich nicht nur ein Beruf, sondern auch eine Leidenschaft, da
              sie mir ermöglicht, kreative Lösungen zu entwickeln und zum
              Wachstum des Internets beizutragen.
            </p>
            <Link to={"/contact"} className="btn mb-[30px] mx-auto lg:mx-0 ">
              Hire me
            </Link>
          </motion.div>
          {/* img  grid*/}
          <div className="box-pro ">
            {projects.map((proj) => (
              <motion.div
                initial={{ scale: 0, y: "80%" }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0, y: "80%" }}
                transition={transition1}
                className=" proje   "
                key={proj.id}
              >
                <Link
                  to={proj.Website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className=" rounded-lg" src={proj.img} />
                </Link>

                <h1 className=" p-5">{proj.name}</h1>
                {/* <p className=" mb-12 max-w-sm">{proj.description}</p> */}
                <button className="btn mb-[30px]  mt-10 justify-center flex items-center">
                  <Link
                    to={proj.Website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </Link>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
