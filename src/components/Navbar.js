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
          width: "100%",
          paddingLeft: "1rem",
          paddingRight: "1rem",
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            fontWeight: 800,
            fontSize: "clamp(1.2rem, 4vw, 1.6rem)",
            letterSpacing: "0.5px",
            background: "linear-gradient(135deg, #c770f0, #b562d6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            cursor: "pointer",
            flexShrink: 0,
          }}
        >
          Aaron.
        </Link>

        <SlideTabs />
      </div>

      <style>{`
        @media (max-width: 600px) {
          .slide-tabs {
            gap: 0.15rem !important;
            padding: 0.25rem !important;
          }
          .tab-item {
            padding: 0.25rem 0.4rem !important;
          }
          .tab-link {
            font-size: 0.65rem !important;
          }
          .cursor-item {
            height: 30px !important;
          }
        }
      `}</style>
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
      className="slide-tabs"
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
        flexShrink: 0,
      }}
    >
      <Tab setPosition={setPosition} to="/">
        <AiOutlineHome style={{ marginRight: "5px" }} /> <span className="tab-text">Home</span>
      </Tab>
      <Tab setPosition={setPosition} to="/about">
        <AiOutlineUser style={{ marginRight: "5px" }} /> <span className="tab-text">About</span>
      </Tab>
      <Tab setPosition={setPosition} to="/project">
        <AiOutlineFundProjectionScreen style={{ marginRight: "5px" }} />
        <span className="tab-text">Projects</span>
      </Tab>
      <Tab setPosition={setPosition} to="/resume">
        <CgFileDocument style={{ marginRight: "5px" }} /> <span className="tab-text">Resume</span>
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
      className="tab-item"
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
        className="tab-link"
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
          whiteSpace: "nowrap",
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
      className="cursor-item"
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
