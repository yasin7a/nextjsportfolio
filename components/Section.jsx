import React from "react";
import EmblaCarousel from "./EmblaCarousel";
import Profile from "./Profile";

const Section = ({ data }) => {
  return (
    <>
      <section>
        <div className="container">
          <div className="wrap-section">
            <Profile />
            <EmblaCarousel slides={data} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Section;
