import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

function NavBar() {
  const [navColour, updateNavbar] = useState(false);
  const [expand, updateExpanded] = useState(false);

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
        padding: "1rem 0",
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
          padding: "0 1rem",
        }}
      >
        <Link
          to="/"
          onClick={() => updateExpanded(false)}
          style={{
            textDecoration: "none",
            fontWeight: 800,
            fontSize: "1.4rem",
            letterSpacing: "0.5px",
            background: "linear-gradient(135deg, #c770f0, #b562d6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            cursor: "pointer",
          }}
        >
          Aaron.
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => updateExpanded(!expand)}
          style={{
            display: "none",
            background: "none",
            border: "2px solid #c770f0",
            borderRadius: "8px",
            padding: "0.5rem",
            cursor: "pointer",
            color: "#c770f0",
            fontSize: "1.5rem",
            lineHeight: 1,
          }}
          className="mobile-menu-toggle"
        >
          {expand ? <IoMdClose /> : <GiHamburgerMenu />}
        </button>

        {/* Desktop Navigation */}
        <div className="desktop-nav" style={{ display: "block" }}>
          <SlideTabs closeMenu={() => updateExpanded(false)} />
        </div>
      </div>

      {/* Mobile Navigation */}
      {expand && (
        <div
          className="mobile-nav"
          style={{
            display: "none",
            flexDirection: "column",
            padding: "1rem",
            backgroundColor: "rgba(20, 20, 40, 0.95)",
            borderTop: "1px solid #c770f0",
          }}
        >
          <MobileMenu closeMenu={() => updateExpanded(false)} />
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .mobile-menu-toggle {
            display: block !important;
          }
          .desktop-nav {
            display: none !important;
          }
          .mobile-nav {
            display: flex !important;
          }
        }
      `}</style>
    </nav>
  );
}

const SlideTabs = ({ closeMenu }) => {
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
        padding: "0.25rem",
        gap: "0.25rem",
        listStyle: "none",
        margin: 0,
      }}
    >
      <Tab setPosition={setPosition} to="/" closeMenu={closeMenu}>
        <AiOutlineHome style={{ marginRight: "5px" }} /> Home
      </Tab>
      <Tab setPosition={setPosition} to="/about" closeMenu={closeMenu}>
        <AiOutlineUser style={{ marginRight: "5px" }} /> About
      </Tab>
      <Tab setPosition={setPosition} to="/project" closeMenu={closeMenu}>
        <AiOutlineFundProjectionScreen style={{ marginRight: "5px" }} />
        Projects
      </Tab>
      <Tab setPosition={setPosition} to="/resume" closeMenu={closeMenu}>
        <CgFileDocument style={{ marginRight: "5px" }} /> Resume
      </Tab>

      <Cursor position={position} />
    </ul>
  );
};

const MobileMenu = ({ closeMenu }) => {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
      <MobileMenuItem to="/" closeMenu={closeMenu}>
        <AiOutlineHome style={{ marginRight: "8px", fontSize: "1.2rem" }} /> Home
      </MobileMenuItem>
      <MobileMenuItem to="/about" closeMenu={closeMenu}>
        <AiOutlineUser style={{ marginRight: "8px", fontSize: "1.2rem" }} /> About
      </MobileMenuItem>
      <MobileMenuItem to="/project" closeMenu={closeMenu}>
        <AiOutlineFundProjectionScreen style={{ marginRight: "8px", fontSize: "1.2rem" }} /> Projects
      </MobileMenuItem>
      <MobileMenuItem to="/resume" closeMenu={closeMenu}>
        <CgFileDocument style={{ marginRight: "8px", fontSize: "1.2rem" }} /> Resume
      </MobileMenuItem>
    </ul>
  );
};

const MobileMenuItem = ({ to, children, closeMenu }) => {
  return (
    <li style={{ margin: "0.5rem 0" }}>
      <Link
        to={to}
        onClick={closeMenu}
        style={{
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          fontSize: "1rem",
          fontWeight: 600,
          color: "white",
          padding: "0.75rem 1rem",
          borderRadius: "8px",
          transition: "all 0.3s ease",
          backgroundColor: "rgba(40, 20, 60, 0.4)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "rgba(199, 112, 240, 0.3)";
          e.currentTarget.style.transform = "translateX(10px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "rgba(40, 20, 60, 0.4)";
          e.currentTarget.style.transform = "translateX(0)";
        }}
      >
        {children}
      </Link>
    </li>
  );
};

const Tab = ({ children, setPosition, to, closeMenu }) => {
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
        padding: "0.4rem 0.8rem",
      }}
    >
      <Link
        to={to}
        onClick={closeMenu}
        style={{
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          fontSize: "0.85rem",
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
