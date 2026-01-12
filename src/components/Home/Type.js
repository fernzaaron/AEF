import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Technology",
          "Software Development",
          "Cybersecurity",
          "Full-stack (Node.js, Express, MongoDB)",
          "Accessibility (WCAG/AODA)",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
