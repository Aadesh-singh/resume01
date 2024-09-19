import React, { useEffect, useRef, useState } from "react";
import classes from "./ScrollTransitionWrapper.module.css";

const ScrollTransitionWrapper = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        console.log("entry.isIntersecting: ", entry.isIntersecting);
        if (entry.isIntersecting !== isVisible) {
          setIsVisible(entry.isIntersecting);
        }
      },
      {
        threshold: 0.1, // Adjust this value
        rootMargin: "0px", // You can try expanding the margin like "100px"
      }
    );
    let wrapperRefCur = wrapperRef.current;

    if (wrapperRefCur) {
      observer.observe(wrapperRefCur);
    }

    return () => {
      if (wrapperRefCur) {
        observer.unobserve(wrapperRefCur);
      }
    };
  }, []);

  return (
    <div
      className={`${classes["scroll-transition-wrapper"]} ${
        isVisible ? classes["visible"] : ""
      }`}
      ref={wrapperRef}
    >
      {children}
    </div>
  );
};

export default ScrollTransitionWrapper;
