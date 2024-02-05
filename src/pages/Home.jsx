import React from "react";
import TImg from "../img/header/tbw.png";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <section className="section ">
      <div className=" container mx-auto h-full relative ">
        {/* text & img wrapper */}
        <div className="  flex flex-col justify-center ">
          {/* text */}
          <div
            className="w-full pt-36 pb-14 lg:pt-0 lg:pb-0
          lg:w-auto lg:absolute flex flex-col justify-center items-center lg:items-start "
          >
            <h1 className="h1 ">
              Web Developer <br /> & Hobby Fashion Designer
            </h1>
            <p className="text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12">
              Berlin, Germany
            </p>
            <Link to={"/contact"} className="btn mb-[30px]">
              hire me
            </Link>
          </div>
          {/* img */}
          <div className="flex justify-end max-h-96 lg:max-h-max">
            <div className=" relative lg:-right-40 overflow-hidden    ">
              <img src={TImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
