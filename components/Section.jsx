import React from "react";
import { gsap } from "gsap";
import EmblaCarousel from "./EmblaCarousel";
import Profile from "./Profile";
import Kintic from "./Kintic";

const Section = ({ data }) => {
  const [play, setPlay] = React.useState(false);
  function handleakinetic() {
    setPlay(!play);
  }
  let kinetic = React.useRef();
  React.useLayoutEffect(() => {
    function move(tx, ty, rotate, scale) {
      return {
        "--tx": tx,
        "--ty": ty,
        "--rotate": rotate,
        "--scale": scale,
      };
    }

    function textMove() {
      return {
        opacity: 0,
        scaleY: 0,
      };
    }

    kinetic.current = gsap
      .timeline({
        paused: true,
        defaults: { duration: 0.7, ease: " Expo.easeOut" },
      })
      .to("section", {
        scale: 0,
      })
      .to(".wrapper-box", move(90, 115, 0, 4))
      .from(".i", textMove())
      .to(".wrapper-box", move(90, 115, 0, 2))
      .from(".frontend", textMove())
      .to(".wrapper-box", move(0, 115, 0, 1))
      .from(".engineer", textMove())
      .to(".wrapper-box", move(-100, 0, -90, 2))
      .from(".with", textMove())
      .to(".wrapper-box", move(-52, -18, -90, 1.6))
      .from(".javascript", textMove())
      .to(".wrapper-box", move(30, 45, 0, 2))
      .from(".typescript", textMove())
      .to(".wrapper-box", move(10, 30, 0, 3))
      .from(".css", textMove())
      .to(".wrapper-box", move(28, 0, 0, 2.2))
      .from(".nodejs", textMove())
      .to(".wrapper-box", move(50, -35, 0, 1.65))
      .from(".animation", textMove())
      .to(".wrapper-box", move(35, -70, 0, 2))
      .from(".scenejs", textMove())
      .to(".wrapper-box", move(0, 0, 0, 1))
      .to(".wrapper-box", {
        opacity: 0,
        delay: 2,
      })
      .to("section", {
        scale: 1,
      });
    return () => {
      kinetic.current.kill();
    };
  }, []);
  React.useLayoutEffect(() => {
    if (play) {
      kinetic.current.restart();
      setPlay(false);
    }
  }, [play]);
  return (
    <>
      <Kintic />

      <section>
        <div className="container">
          <div className="wrap-section">
            <Profile handleplay={handleakinetic} />
            <EmblaCarousel slides={data} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Section;
