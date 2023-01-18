import React, { useState, useRef } from "react";

export function Neznau({ children }) {
  let [x, setX] = useState(20);
  let [y, setY] = useState(34);

  let startMouseX = undefined;
  let startMouseY = undefined;

  const contentRef = useRef(null);
  const handleMouseDown = (e) => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (startMouseX === undefined || startMouseY === undefined) {
      startMouseX = e.clientX;
      startMouseY = e.clientY;
    }
    console.log(startMouseX, startMouseY, e.clientX, e.clientY);
    setX(x + e.clientX - startMouseX);
    setY(y + e.clientY - startMouseY);
  };

  const handleMouseUp = (e) => {
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
    startMouseX = undefined;
    startMouseY = undefined;
  };

  return (
    <div
      ref={contentRef}
      onMouseDown={handleMouseDown}
      style={{
        position: "absolute",
        top: `${y}px`,
        left: `${x}px`,
        width: "100vw",
        height: "100vh",
      }}
    >
      {children}
    </div>
  );
}
