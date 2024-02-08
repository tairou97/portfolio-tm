import React from "react";

import { useContext } from "react";
import { CursorContext } from "../context/CursorContext";
import {
  FaGithub,
  FaLinkedin,
  FaDiscord,
  FaXing,
  FaSlack,
} from "react-icons/fa";
const Socials = () => {
  const { mouserEnter, mouseLeaverEnter } = useContext(CursorContext);
  const socials = [
    {
      id: 1,
      name: "GitHub",
      href: " https://github.com/tairou97 ",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      id: 2,
      name: "LinkedIn",
      href: " https://www.linkedin.com/in/tairou-mouhamed-744955160/ ",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      id: 3,
      name: "Discord",
      href: " 602578888320745492 ",
      target: "_blank",
      rel: "noopener noreferrer",
    },

    {
      id: 4,
      name: "Xing",
      href: " https://www.xing.com/profile/Tairou_Mouhamed/web_profiles ",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      id: 5,
      name: "Slack",
      href: " https://dcistudents.slack.com/team/U05EL1G9JJ3 ",
      target: "_blank",
      rel: "noopener noreferrer",
    },
  ];

  return (
    <div
      onMouseEnter={mouserEnter}
      onMouseLeave={mouseLeaverEnter}
      className="hidden xl:flex ml-24"
    >
      <ul className="flex gap-x-4">
        {socials.map((social) => (
          <a
            key={social.id}
            href={social.href}
            className="text-3xl text-primary ml-4"
          >
            {social.name === "GitHub" ? (
              <FaGithub />
            ) : social.name === "LinkedIn" ? (
              <FaLinkedin />
            ) : social.name === "Discord" ? (
              <FaDiscord />
            ) : social.name === "Xing" ? (
              <FaXing />
            ) : social.name === "Slack" ? (
              <FaSlack />
            ) : (
              ""
            )}
          </a>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
