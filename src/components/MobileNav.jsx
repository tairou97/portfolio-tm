import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const meunVariants = {
  hidden: {
    x: "100%",
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

const Nav = [
  { id: 1, name: "Home", to: "/" },
  { id: 2, name: "About", to: "/about" },
  { id: 3, name: "Skills", to: "/skills" },
  { id: 4, name: "Projects", to: "/projects" },
  { id: 5, name: "Contact", to: "/contact" },
];

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpenMenu(false); // Schließe das Menü, wenn sich die Route ändert
  }, [location]);

  return (
    <nav className="text-primary xl:hidden">
      {/* Nav-Öffnen-Schaltfläche */}
      <div
        onClick={() => setOpenMenu(true)}
        className="text-3xl cursor-pointer"
      >
        <CgMenuRight />
      </div>
      {/* Menü */}
      <motion.div
        variants={meunVariants}
        initial="hidden"
        animate={openMenu ? "show" : ""}
        className="bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20"
      >
        {/* Menüschließ-Icon */}
        <div onClick={() => setOpenMenu(false)}>
          <IoMdClose className="text-4xl absolute z-30 left-4 top-14 cursor-pointer text-primary" />
        </div>

        <ul className="h-full flex flex-col justify-center items-center gap-y-8 text-primary font-primary font-bold text-3xl">
          {Nav.map((nav) => (
            <li key={nav.id}>
              <Link to={nav.to}>{nav.name}</Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
};

export default MobileNav;
