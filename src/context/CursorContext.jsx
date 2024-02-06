import React, { createContext, useEffect, useState } from "react";

// createContext
export const CursorContext = createContext();

const CursorProvider = ({ children }) => {
  const [cursorPos, setCursorPos] = useState({
    x: 0,
    y: 0,
  });
  // cursor bg  state
  const [cursorBg, setCursorBg] = useState("default");
  const mobileViewIsActive = window.innerWidth < 768;
  useEffect(() => {
    if (!mobileViewIsActive) {
      const move = (e) => {
        setCursorPos({
          x: e.clientX,
          y: e.clientY,
        });
      };
      window.addEventListener("mousemove", move);
      return () => {
        window.removeEventListener("mousemove", move);
      };
    } else {
      setCursorBg("none");
    }
  });
  // cursor variants
  const cursorVariants = {
    default: {
      x: cursorPos.x - 16,
      y: cursorPos.y - 16,
      backgroundColor: "#0e1112",
    },
    text: {
      width: "150px",
      height: "150px",
      x: cursorPos.x - 72,
      y: cursorPos.y - 72,
      backgroundColor: "#fff",
      mixBlendMode: "difference",
    },
    none: {
      width: 0,
      height: 0,
      backgroundColor: "rgba(255,255,255,1)",
    },
  };
  // mouse  enter
  const mouserEnter = () => {
    setCursorBg("text");
  };

  // mouse leaver enter
  const mouseLeaverEnter = () => {
    setCursorBg("default");
  };
  return (
    <CursorContext.Provider
      value={{ cursorVariants, cursorBg, mouserEnter, mouseLeaverEnter }}
    >
      {children}
    </CursorContext.Provider>
  );
};

export default CursorProvider;
