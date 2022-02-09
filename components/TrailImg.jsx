import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const TrailImg = ({ opacity }) => {
  let title = useRef(null);

  useEffect(() => {
    let trail = title.current;
    function trail_img(e) {
      gsap.to(".title .trail h2", {
        xPercent: -110,
        yPercent: -110,
        x: e.x,
        y: e.y,
        stagger: 0.1,
      });
    }
    trail.parentElement.addEventListener("mousemove", trail_img);

    return () => {
      trail.parentElement.removeEventListener("mousemove", trail_img);
    };
  }, []);

  return (
    <div className="trail" ref={title} style={{ opacity: opacity ? 1 : 0 }}>
      <h2>MAN</h2>
      <h2>IRON</h2>
      <h2>AM</h2>
      <h2>I</h2>
    </div>
  );
};

export default TrailImg;
