import React from "react";
import Img from "../img/contact/ta.png";
const Contact = () => {
  return (
    <section section className="section bg-white">
      <div className="conatiner max-auto h-full">
        <div
          className="flex flex-col  lg:flex-row h-full items-center  justify-start pt-36 gap-x-8 text-center
        lg:text-left"
        >
          {/* bg */}
          <div className="hidden lg:flex bg-[#eef7f9]  absolute bottom-0 left-0  right-0 top-7 -z-10"></div>
          {/* text & from */}
          <div className="lg:flex-1 lg:pt-32 px-4">
            <h1 className="h1">Contact me</h1>
            <p className="mb-12">I would love to get suggestions from you.</p>
            {/* form */}
            <form className="flex flex-col gap-y-4">
              <div className=" flex gap-x-10">
                <input
                  className="outline-none border-b  border-b-primary h-[60px] 
                  bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                  type="text"
                  placeholder="Your name"
                />
                <input
                  className="outline-none border-b  border-b-primary h-[60px] 
                  bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                  type="text"
                  placeholder="Your email  address"
                />
              </div>
              <input
                className="outline-none border-b  border-b-primary h-[60px] 
                  bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                type="text"
                placeholder="Your message"
              />
              <button className="btn mb-[30px] mx-auto lg:mx-0 self-start">
                Send
              </button>
            </form>
          </div>
          {/* img */}
          <div className="lg.flex-1">
            <img src={Img} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
