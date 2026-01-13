import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <nav
      className={`navbar-container ${navColour ? "sticky" : ""}`}
      style={{
        padding: "1.5rem 0",
        backdropFilter: navColour ? "blur(10px)" : "none",
        backgroundColor: navColour ? "rgba(20, 20, 40, 0.8)" : "transparent",
        transition: "all 0.3s ease",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
          paddingX: "2rem",
          width: "100%",
          paddingLeft: "2rem",
          paddingRight: "2rem",
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            fontWeight: 800,
            fontSize: "1.6rem",
            letterSpacing: "0.5px",
            background: "linear-gradient(135deg, #c770f0, #b562d6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            cursor: "pointer",
          }}
        >
          Aaron.
        </Link>

        <SlideTabs />
      </div>
    </nav>
  );
}

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      style={{
        position: "relative",
        display: "flex",
        width: "fit-content",
        borderRadius: "50px",
        border: "2px solid #c770f0",
        backgroundColor: "rgba(40, 20, 60, 0.6)",
        padding: "0.5rem",
        gap: "0.5rem",
        listStyle: "none",
        margin: 0,
      }}
    >
      <Tab setPosition={setPosition} to="/">
        <AiOutlineHome style={{ marginRight: "5px" }} /> Home
      </Tab>
      <Tab setPosition={setPosition} to="/about">
        <AiOutlineUser style={{ marginRight: "5px" }} /> About
      </Tab>
      <Tab setPosition={setPosition} to="/project">
        <AiOutlineFundProjectionScreen style={{ marginRight: "5px" }} />
        Projects
      </Tab>
      <Tab setPosition={setPosition} to="/resume">
        <CgFileDocument style={{ marginRight: "5px" }} /> Resume
      </Tab>

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition, to }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      style={{
        position: "relative",
        zIndex: 10,
        cursor: "pointer",
        padding: "0.5rem 1rem",
      }}
    >
      <Link
        to={to}
        style={{
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          fontSize: "0.9rem",
          fontWeight: 600,
          textTransform: "uppercase",
          color: "white",
          mixBlendMode: "difference",
          transition: "color 0.3s ease",
        }}
      >
        {children}
      </Link>
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <li
      style={{
        position: "absolute",
        zIndex: 0,
        height: "45px",
        borderRadius: "50px",
        background: "linear-gradient(135deg, #c770f0, #b562d6)",
        pointerEvents: "none",
        left: `${position.left}px`,
        width: `${position.width}px`,
        opacity: position.opacity,
        transition: "all 0.2s ease-out",
      }}
    />
  );
};

export default NavBar;
