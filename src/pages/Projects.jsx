import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./project.css";
import { motion } from "framer-motion";
import { transition1 } from "../transition";
import { useContext } from "react";

import { CursorContext } from "../context/CursorContext";

const Projects = () => {
  const { mouserEnter, mouseLeaverEnter } = useContext(CursorContext);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`  /data.json`);
        console.log(response);

        console.log(); // Fetch data.json from the public directory
        const data = await response.json();

        console.log(data);
        setUserData(data);
      } catch (error) {
        console.error("Error fetching JSON data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <motion.section
      initial={{ scale: 0, y: "100%" }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0, y: "100%" }}
      transition={transition1}
      className=" flex items-center justify-center   bg-[#f5f5f5]"
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
            className="flex flex-col lg:items-center w-full  mt-12 "
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
          <div className="box-pro shadow-2xl ">
            {userData &&
              userData.projects.map((project, index) => (
                <div
                  key={index}
                  className="flex flex-col lg:items-center w-full  mt-12 "
                >
                  <img
                    src={project.img}
                    alt="project"
                    className="w-full h-[300px] object-cover"
                  />
                  <h1 className="h1">{project.title}</h1>
                  <p className=" mb-12 max-w-xl p-1 text-center">
                    {project.description}
                  </p>

                  <Link
                    to={"/contact"}
                    className="btn mb-[30px] mx-auto lg:mx-0 "
                  >
                    Hire me
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
