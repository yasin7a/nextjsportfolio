import React from "react";

import SvgImg from "./SvgImg";

const Header = ({ data }) => {
  function handleenter() {
    document.body.classList.add("logopush");
  }
  function handleleave() {
    document.body.classList.remove("logopush");
  }

  return (
    <>
      <div className="loading-container"></div>
      <div className="loading-screen"></div>

      <header>
        <div className="container">
          <nav>
            <div className="logo">
              <a href="/" onMouseEnter={handleenter} onMouseLeave={handleleave}>
                <SvgImg />
                <span className="ya animationscreenproblem">
                  <span>Y</span>
                  <span>A</span>
                </span>
              </a>
            </div>
            <div className="projectCount animationscreenproblem">
              <h4 data-count={data.length}>projects</h4>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
