import { Fragment, useEffect, useState } from "react";
import classes from "./HeaderNavigation.module.css";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Button from "../ui/Button";

const HeaderNavigation = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  // Function to check if the current hash matches the given href
  const isActiveHash = (hash) => location.hash === hash;

  // Effect to scroll to the section based on hash
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Fragment>
      <ul className={`${classes.ulList} ${scrolled ? classes.scrolled : null}`}>
        <li>
          <HashLink
            to="#intro"
            title="Home"
            className={isActiveHash("#intro") ? classes.active : null}
            smooth
          >
            Home
          </HashLink>
        </li>
        <li>
          <HashLink
            to="#about"
            title="About Aadesh"
            className={isActiveHash("#about") ? classes.active : null}
            smooth
          >
            About Me
          </HashLink>
        </li>
        <li>
          <HashLink
            to="#company_projects"
            title="Aadesh's Projects"
            className={
              isActiveHash("#company_projects") ? classes.active : null
            }
            smooth
          >
            Company Projects
          </HashLink>
        </li>
        <li>
          <HashLink
            to="#projects"
            title="Aadesh's Projects"
            className={isActiveHash("#projects") ? classes.active : null}
            smooth
          >
            Personal Projects
          </HashLink>
        </li>
        <li>
          <HashLink
            to="#contact"
            title="Contact Aadesh"
            className={isActiveHash("#contact") ? classes.active : null}
            smooth
          >
            Contact
          </HashLink>
        </li>
        <li>
          <Button>Download Resume</Button>
        </li>
      </ul>
    </Fragment>
  );
};
export default HeaderNavigation;
