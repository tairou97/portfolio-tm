import React, { useState } from "react";
import { Link } from "react-router-dom";
import Json from "../img/projects/project.json";
import Img from "../img/projects/Weather.png";
import Img1 from "../img/projects/single-price-grid.png";
import Img2 from "../img/projects/Column-Preview-Card.png";
import Img3 from "../img/projects/Grid-Layout.png";

const Projects = () => {
  const [projects, setProjects] = useState(Json.projects);
  console.log(projects[0].name);
  return (
    <section className="section ">
      <div className="container  mx-auto h-full relative">
        <div
          className="flex flex-col lg:flex-row h-full 
          items-center justify-start gap-x-24 text-center lg:text-left
          pt-24 lg:pt-36 pb-8"
        >
          {/* text */}
          <div className="flex flex-col lg:items-start">
            <h1 className="h1">Projects</h1>
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
            <Link to={"/contact"} className="btn mb-[30px] mx-auto lg:mx-0 ">
              Hire me
            </Link>
          </div>
          {/* img  grid*/}
          <div className="grid grid-cols-2 lg:gap-2">
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
    </section>
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
