import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import data from "../data/slider";
import Header from "./Header";
import Section from "./Section";
import Cursor from "./Cursor";

function App() {
  let [cursorDis, setCursorDis] = useState(true);

  let animloadbgGsap = useRef(null);

  useEffect(() => {
    const animloadbg = gsap.to(".loading-container", {
      duration: 1,
      delay: 2,
      right: "-110%",
      ease: "Expo.easeInOut",
    });

    animloadbgGsap.current = gsap
      .timeline({ defaults: { ease: "Expo.easeInOut", duration: 1 } })

      .set(".logo a > svg", {
        xPercent: -97,
        yPercent: -96,
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        scale: 5,
      })
      .to(
        ".logo a > svg",
        {
          xPercent: 0,
          yPercent: 0,
          x: 0,
          y: 0,
          scale: 1,
          ease: "power1.out",
        },
        "+=.5"
      )

      .to(".loading-screen", {
        width: "100%",
      })
      .to(".loading-screen", {
        right: "-110%",
      })
      .from([".ya > span", ".projectCount"], {
        opacity: 0,
        stagger: 0.2,
      })
      .from(".title h1 span > span", {
        skewY: 8,
        y: 50,
        x: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.9,
        ease: "Power2.easeInOut",
      })
      .from(".title p span > span", {
        skewY: 2,
        y: 10,
        opacity: 0,
        stagger: 0.01,
        duration: 0.6,
        ease: "Power2.easeInOut",
      })
      .from(".kinticBtn", {
        y: 10,
        opacity: 0,
      })
      .from(".social_icon a svg", {
        opacity: 0,
        y: 10,
        stagger: 0.1,
      })
      .from(".social_icon span", {
        opacity: 0,
      })
      .from(".slider-wrapper", {
        opacity: 0,
        autoAlpha: 0,
        duration: 1.5,
      });
    animloadbgGsap.current.play();

    window.matchMedia("(max-width: 768px)").matches
      ? setCursorDis(false)
      : setCursorDis(true);

    return () => {
      animloadbg.kill();
      animloadbgGsap.current.kill();
    };
  }, []);

  return (
    <>
      {cursorDis && <Cursor />}
      <div className="App">
        <Header data={data} />
        <Section data={data} />
        <footer>
          <p>
            © Copyright {new Date().getFullYear()} Yasin Arafath All Rights
            Reserved.
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
