import React from "react";
import Socials from "./Socials";
import Logo from "../img/header/logo-transparent.png";
import MobileNav from "./MobileNav";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CursorContext } from "../context/CursorContext";

const Header = () => {
  const { mouserEnter, mouseLeaverEnter } = useContext(CursorContext);
  const Nav = [
    { id: 1, name: "Home", to: "/" },
    { id: 2, name: "About", to: "/about" },
    { id: 3, name: "Skills", to: "/skills" },
    { id: 4, name: "Projects", to: "/projects" },
    { id: 5, name: "Contact", to: "/contact" },
  ];

  return (
    <header
      className=" fixed w-full px-[30px]
  lg:px-[100px] z-30 h-[100px] lg:h[140px] flex items-center j"
    >
      <div className="flex  flex-col lg:flex-row lg:items-center w-full justify-between">
        {/* Logo */}
        <Link
          onMouseEnter={mouserEnter}
          onMouseLeave={mouseLeaverEnter}
          to={"/"}
          className="max-w-[200px]"
        >
          <img className="w-20" src={Logo} alt="" />
        </Link>
        {/* Nav */}
        <nav
          onMouseEnter={mouserEnter}
          onMouseLeave={mouseLeaverEnter}
          className="hidden xl:flex  list-none gap-x-12 font-semibold"
        >
          {Nav.map((nav) => {
            return (
              <li key={nav.id}>
                <Link
                  className="text-[#080808] hover:text-primary transition"
                  to={nav.to}
                >
                  {nav.name}
                </Link>
              </li>
            );
          })}
        </nav>
        <p>lorem*500</p>
      </div>
      {/* Socials */}
      <Socials />
      {/* Mobile Nav */}
      <MobileNav key={Nav} />
    </header>
  );
};

export default Header;
