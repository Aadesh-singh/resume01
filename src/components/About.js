import Button from "../ui/Button";
import classes from "./About.module.css";
import SectionWraper from "./SectionWraper";
// import image from "../assets/me3.jpg";

const About = () => {
  return (
    <SectionWraper id="about">
      <section id="about" className={classes["about-section"]}>
        <div className="container">
          <h1 className={classes["about-heading"]}>About Me</h1>
          <div className={classes["about-container"]}>
            <div className={classes["img-container"]}>
              <img
                src="/assets/me1.jpg"
                className={classes["img"]}
                alt="Aadesh Singh"
              />
            </div>
            <div className={classes["description-container"]}>
              <p>
                An accomplished <bold>Full Stack Software Engineer</bold> with a
                flair for designing technology that streamlines lives. Adept in
                Backend and Frontend Web Development, I am committed to staying
                at the forefront of tech trends and delivering impactful
                solutions that simplify the world.
              </p>
              <p>
                Fun Fact: My passion for this field was fueled by the iconic
                Movies/Comic character "Tony Stark(I am IronMan 🤖)."
              </p>
              <p>
                <Button>View Resume</Button>
              </p>
            </div>
          </div>
        </div>
      </section>
    </SectionWraper>
  );
};
export default About;
