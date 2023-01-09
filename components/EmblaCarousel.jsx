import React, { useState, useEffect, useCallback } from "react";
import { PrevButton, NextButton } from "./EmblaCarouselButtons";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import Image from "next/image";
import Items from "./Items";

const EmblaCarousel = ({ slides }) => {
  const [viewportRef, embla] = useEmblaCarousel({
    containScroll: "trimSnaps",
    dragFree: true,
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDown, setIsDown] = useState(false);
  const [isresponsive, setIsresponsive] = useState(true);

  function handleenter() {
    document.body.classList.add("itempush");
  }
  function handleleave() {
    document.body.classList.remove("itempush");
  }

  function isDragTrue() {
    setIsDown(true);
  }
  function isDragFalse() {
    setIsDown(false);
  }

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  const onScroll = useCallback(() => {
    if (!embla) return;
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
    setScrollProgress(progress * 100);
  }, [embla, setScrollProgress]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    onScroll();
    embla.on("select", onSelect);
    embla.on("scroll", onScroll);
  }, [embla, onSelect, onScroll]);
  useEffect(() => {
    window.matchMedia("(max-width: 768px)").matches
      ? setIsresponsive(false)
      : setIsresponsive(true);
  }, []);
  return (
    <>
      <div className="slider-wrapper col-7">
        <div className="embla">
          <div className="embla__viewport" ref={viewportRef}>
            <div
              className="embla__container"
              onMouseDown={isDragTrue}
              onMouseUp={isDragFalse}
              onMouseLeave={isDragFalse}
            >
              {isresponsive ? (
                slides.map((item) => (
                  <div className="slider" key={item.id}>
                    <Link href={item.link} target="_blank">
                      <a>
                        <div
                          className="browser"
                          style={{ pointerEvents: isDown ? "none" : "unset" }}
                        >
                          <div
                            className="browser-body"
                            onMouseEnter={handleenter}
                            onMouseLeave={handleleave}
                          >
                            <div className="img">
                              <Image
                                src={item.img}
                                qualit={100}
                                alt="screenshots of website"
                                layout="fill"
                              />
                            </div>

                            <div className="info">
                              <h3>{item.title}</h3>
                              <div className="tech">
                                {item.techs.map((tech, index) => {
                                  return <span key={index}>{tech}</span>;
                                })}
                              </div>
                            </div>
                            <code>{item.id}</code>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>
                ))
              ) : (
                <Items data={slides} />
              )}
            </div>
          </div>
        </div>
        <div className="controlers">
          <div className="embla__progress">
            <div
              className="embla__progress__bar"
              style={{ transform: `translateX(${scrollProgress}%)` }}
            />
          </div>
          <div className="slider-nav">
            <div>
              <Link href="/viewall">
                <a>View all</a>
              </Link>
            </div>
            <span id="prev">
              <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
            </span>
            <span id="next">
              <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmblaCarousel;
