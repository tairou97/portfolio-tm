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
// import { IoLogoJavascript } from "react-icons/io";
// import { SiTailwindcss } from "react-icons/si";
// import { SiReact } from "react-icons/si";
// import { SiHtml5 } from "react-icons/si";
// import { SiCss3 } from "react-icons/si";
// import { SiSass } from "react-icons/si";
// import { SiNodeDotJs } from "react-icons/si";

// import { SiGit } from "react-icons/si";
// import { SiGithub } from "react-icons/si";

// import { SiVisualstudiocode } from "react-icons/si";
// import { SiFigma } from "react-icons/si";

// import { SiJavascript } from "react-icons/si";

// import { SiBootstrap } from "react-icons/si";

// import { SiNpm } from "react-icons/si";

// import { SiPostman } from "react-icons/si";

const Skills = () => {
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
            className="grid grid-cols-2 lg:gap-2"
          >
            {/* img  */}
            <div
              className="max-w-[250px] lg:max-w-[320px] 
            h-[187px] lg:h-[220px] bg-accent overflow-hidden
            "
            >
              <img
                src="https://rapidapi.com/blog/wp-content/uploads/2018/06/logo-2582748_640.png"
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
                src={
                  "https://rithmapp.s3-us-west-2.amazonaws.com/assets/node-logo.png"
                }
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
                src={
                  "https://k2bindia.com/wp-content/uploads/2015/08/React.png"
                }
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
                src={
                  "https://www.ankitweblogic.com/javascript/js_img/javascript.png"
                }
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
                src={
                  "https://miro.medium.com/v2/resize:fit:1358/1*xwAIUbfad95lsuGf2n9nnA.jpeg"
                }
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
                src={
                  "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_640.png"
                }
                alt=""
              />
            </div>
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
