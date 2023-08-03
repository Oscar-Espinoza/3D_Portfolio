import React, { useState, useRef } from "react";
import { styles } from "../../styles";
import { myLogo, menu, close } from "../../assets";
import { handleLinkClick } from "../../utils/motion";
import ScrollBar from "../ScrollBar";
import "./styles.css";

const Navbar = ({ currentSection, setCurrentSection }) => {
  const [toggle, setToggle] = useState(false);
  const navRef = useRef(null);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary md:hidden`}
      ref={navRef}
    >
      <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
        <button
          type="button"
          className={styles.Link}
          onClick={() => {
            setToggle(!toggle);
            window.scrollTo(0, 0);
          }}
        >
          <img src={myLogo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[26px] font-bold curson-pointer flex">
            Oscar &nbsp;
            <span
              className="sm:block hidden
          "
            >
              | Espinoza
            </span>
          </p>
        </button>
        <div className="md:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer
            "
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "block"
            } absolute right-0 w-full bg-primary scrollBar`}
          >
            <ScrollBar
              currentSection={currentSection}
              setCurrentSection={setCurrentSection}
              navRef={navRef}
              setToggle={setToggle}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
