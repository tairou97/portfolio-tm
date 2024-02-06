import React, { useState } from "react";
import { Link } from "react-router-dom";
import Json from "../img/projects/project.json";
import Img from "../img/projects/Weather.png";
import Img1 from "../img/projects/single-price-grid.png";
import Img2 from "../img/projects/Column-Preview-Card.png";
import Img3 from "../img/projects/Grid-Layout.png";
import { motion } from "framer-motion";
import { transition1 } from "../transition";
import { useContext } from "react";
import { CursorContext } from "../context/CursorContext";

const Projects = () => {
  const { mouserEnter, mouseLeaverEnter } = useContext(CursorContext);
  const [projects, setProjects] = useState(Json.projects);
  console.log(projects[0].name);

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
            <h1 className="h1">Projects</h1>
            <p className=" mb-12 max-w-sm">
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
          <div
            onMouseEnter={mouserEnter}
            onMouseLeave={mouseLeaverEnter}
            className="grid grid-cols-2 lg:gap-2"
          >
            {/* img  */}
            <div
              className="max-w-[250px] lg:max-w-[320px] 
            h-[187px] lg:h-[220px] bg-accent overflow-hidden 
            "
            >
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 
                transition-all duration-500 "
                src={Img}
                alt=""
              />
            </div>

            <div
              className="max-w-[250px] lg:max-w-[320px] 
            h-[187px] lg:h-[220px] bg-accent overflow-hidden
            "
            >
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 
                transition-all duration-500 "
                src={Img1}
                alt=""
              />
            </div>

            <div
              className="max-w-[250px] lg:max-w-[320px] 
            h-[187px] lg:h-[220px] bg-accent overflow-hidden
            "
            >
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 
                transition-all duration-500 "
                src={Img2}
                alt=""
              />
            </div>

            <div
              className="max-w-[250px] lg:max-w-[320px] 
            h-[187px] lg:h-[220px] bg-accent overflow-hidden
            "
            >
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 
                transition-all duration-500 "
                src={Img3}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;

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
