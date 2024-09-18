import { useEffect, useState } from "react";
import classes from "./Introduction.module.css";
import SectionWraper from "./SectionWraper";

const roles = [
  "Full Stack Developer",
  "Software Engineer",
  "React Developer",
  "Angular Developer",
  "NodeJS Developer",
  "MEAN Developer",
  "MERN Developer",
];

const Introduction = () => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    let i = 0;
    let id = setInterval(() => {
      setTitle(roles[i]);
      i = (i + 1) % roles.length;
    }, 1500);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <SectionWraper id="intro">
      <section id="intro" className={classes["section-hero"]}>
        <div className={classes["hero-container"]}>
          <h1 className={classes["hero-title"]}>
            Hi, My name is{" "}
            <span className={classes["hero_txt"]}>Aadesh Singh</span>
            <br />
            I'm a {title}.
          </h1>
          <p>
            <a
              className={`${classes["cta"]} ${classes["hero-cta"]} `}
              href="#about"
              title="Know more"
            >
              Know more
            </a>
          </p>
        </div>
      </section>
    </SectionWraper>
  );
};
export default Introduction;
