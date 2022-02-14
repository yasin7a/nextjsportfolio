import { useState, useEffect, useRef } from "react";
import { BsFacebook, BsLinkedin, BsGithub, BsSkype } from "react-icons/bs";
import {AiFillFire} from "react-icons/ai"
import { SplitWords } from "react-gsap";
import TrailImg from "./TrailImg";
const Profile = ({ handleplay }) => {
  let [istrail, setIstrain] = useState(false);
  let [trailop, setTrainOp] = useState(false);
  let [trailDis, setTrailDis] = useState(false);

  let letter = useRef();
  let letter2 = useRef();
  const TRailtimer = useRef(null);
  function handleenter() {
    document.body.classList.add("linkpush");
  }
  function handleleave() {
    document.body.classList.remove("linkpush");
  }

  function handleOpacity() {
    setTrainOp(true);
  }
  function handleRMOpacity() {
    setTrainOp(false);
  }

  useEffect(() => {
    [...letter.current.children].forEach((item) => {
      item.innerHTML = item.textContent.replace(
        /\S/g,
        `<span class='letter'>$&</span>`
      );
    });
    [...letter2.current.children].forEach((item) => {
      item.innerHTML = item.textContent.replace(
        /\S/g,
        `<span class='letter'>$&</span>`
      );
      // ======
      TRailtimer.current = setTimeout(() => setIstrain(true), 6000);
      window.matchMedia("(max-width: 768px)").matches
        ? setTrailDis(false)
        : setTrailDis(true);

      return () => {
        clearInterval(TRailtimer.current);
      };
    });
  }, []);

  return (
    <>
      <div className="profile col-5">
        <div
          className="title"
          onMouseEnter={handleOpacity}
          onMouseLeave={handleRMOpacity}
        >
          {trailDis && istrail && <TrailImg opacity={trailop} />}

          <h1 ref={letter}>
            <SplitWords wrapper={<span style={{ display: "inline-block" }} />}>
              Yasin Arafath
            </SplitWords>
          </h1>

          <p ref={letter2}>
            <SplitWords wrapper={<span style={{ display: "inline-block" }} />}>
              A passionate javascript full-stack developer .Love to learning and
              sharing my knowledge with others.
            </SplitWords>
          </p>
        </div>
        <button className="kinticBtn" onClick={handleplay}>
          My Skills
          <AiFillFire/>
        </button>
        <div>
          <div
            className="social_icon"
            onMouseEnter={handleenter}
            onMouseLeave={handleleave}
          >
            <a href="https://fb.com/yasinarafath0">
              <BsFacebook />
            </a>
            <a href="https://join.skype.com/invite/yTkRuvgjOIxH">
              <BsSkype />
            </a>

            <a href="https://github.com/yasin7a">
              <BsGithub />
            </a>
            <a href="https://linkedin.com/in/yasin-arafath-80ab22207">
              <BsLinkedin />
            </a>
            <span></span>
          </div>
        </div>

        
      </div>
    </>
  );
};

export default Profile;
