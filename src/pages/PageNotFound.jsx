import React from "react";
import { motion } from "framer-motion";
import { transition1 } from "../transition";
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <motion.section
      initial={{ scale: 0, y: "100%" }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0, y: "100%" }}
      transition={transition1}
    >
      <div
        animate
        className="flex flex-col lg:items-center items-center justify-center h-[80vh] text-center text-red-400 "
      >
        <h1 className="h1">404</h1>
        <p className="mb-12 text-2xl">
          The requested page could not be found. Please check the URL and try
          again.
        </p>
        <Link
          to={"/"}
          className="btn mb-[30px] mx-auto lg:mx-0   hover:bg-slate-400"
        >
          Back to home
        </Link>
      </div>
    </motion.section>
  );
};

export default PageNotFound;
