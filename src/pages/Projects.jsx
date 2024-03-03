import React, { useEffect, useState } from "react";
import "./project.css";
import { motion } from "framer-motion";
import { transition1 } from "../transition";
import { useContext } from "react";
import { CursorContext } from "../context/CursorContext";
import { Link } from "react-router-dom";
import Json from "../json/data.json";

const Projects = () => {
  const { mouserEnter, mouseLeaverEnter } = useContext(CursorContext);
  // const [projects, setProjects] = useState([]);
  // console.log("projects", projects);
  const [data, setData] = useState(Json.projects);

  useEffect(() => {
    async function renderProject() {
      const url = "http://localhost:8000/projects";
      try {
        const resp = await fetch(url);
        const data = await resp.json();
        setData(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    }
    renderProject();
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
            className="flex justify-center items-center flex-col lg:items-center w-full  mt-12 "
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
            {data &&
              data.map((proj) => (
                <motion.div
                  initial={{ scale: 0, y: "80%" }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0, y: "80%" }}
                  transition={transition1}
                  className=" proje rounded-t-lg shadow-2xl overflow-hidden "
                  key={proj.id}
                >
                  <Link
                    className="max-w-[250px] lg:max-w-[320px] rounded-lg
                h-[187px] lg:h-[220px] bg-accent overflow-hidden "
                    to={proj.Website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className=" img hover:scale-110 
                    transition-all duration-500 rounded-t-lg"
                      src={proj.img}
                    />
                  </Link>

                  <h1 className=" mt-7">{proj.name}</h1>
                  <p> {proj.description} </p>
                  {/* <p className=" mb-12 max-w-sm">{proj.description}</p> */}
                  <div className="flex justify-center items-center shadow-xl">
                    <button className="btn  shadow-xl  ">
                      <Link
                        to={proj.Website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                      </Link>
                    </button>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
