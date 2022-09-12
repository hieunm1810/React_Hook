import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSpring, animated } from "react-spring";
export default function DemoAnimation() {
  const [styles, api] = useSpring(() => ({ color: "red", fontSize: "15px" }));
  // const [toggle, setToggle] = useState(true);

  // Update spring with new props

  // Stop animation
  //   api.stop();
  useEffect(() => {
    console.log("effect");
    return () => {
      console.log("Cleanup");
      api.stop();
    };
  });
  return (
    <div>
      <button
        onClick={() => {
          // api.start({ opacity: toggle ? 1 : 0 });
          api.start({ color: "blue", fontSize: "25px" });
        }}
      >
        start
      </button>
      <button
        onClick={() => {
          // api.start({ opacity: false ? 1 : 0 });
          api.start({ color: "red", fontSize: "15px" });
        }}
      >
        stop
      </button>
      <animated.div style={styles}>i will fade</animated.div>
    </div>
  );
}
