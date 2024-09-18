import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SectionWraper = ({ id, children }) => {
  const wrapperRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Check if the current hash matches the id, if not, update the hash
          if (location.hash !== `#${id}`) {
            navigate(`#${id}`, { replace: true });
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Adjust this to decide when to trigger the update
    });

    const wrapperRefCurrent = wrapperRef.current;
    if (wrapperRefCurrent) {
      observer.observe(wrapperRefCurrent);
    }

    return () => {
      if (wrapperRefCurrent) {
        observer.unobserve(wrapperRefCurrent);
      }
    };
  }, [id, navigate, location]);

  return (
    <div ref={wrapperRef} id={id}>
      {children}
    </div>
  );
};

export default SectionWraper;
