import React from "react";

const Cursor = () => {
  const [cursor, setCursor] = React.useState({
    X: -100,
    Y: -100,
  });
  React.useEffect(() => {
    function handleCursor(e) {
      setCursor((prev) => {
        return {
          ...prev,
          X: e.clientX,
          Y: e.clientY,
        };
      });
    }

    window.addEventListener("mousemove", handleCursor);
    return () => {
      window.removeEventListener("mousemove", handleCursor);
    };
  }, []);
  return (
    <>
      <div
        className="cursor"
        style={{ transform: `translate3d(${cursor.X}px, ${cursor.Y}px, 0px)` }}
      ></div>
      <div
        className="cursor2"
        style={{
          transform: `translate3d(${cursor.X}px, ${cursor.Y}px, 0px) rotate(45deg)`,
        }}
      ></div>
    </>
  );
};

export default Cursor;
