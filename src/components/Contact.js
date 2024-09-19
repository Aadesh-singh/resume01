// Import FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Import specific icon from free-solid-svg-icons
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import classes from "./Contact.module.css";
import SectionWraper from "./SectionWraper";
const Contact = () => {
  return (
    <SectionWraper id="contact">
      <section className={classes["contact-section"]}>
        <div className="container">
          <h2 className={classes["container-title"]}>Contact</h2>
          <div className={classes["contact-wraper"]}>
            <p className={classes["contact-wrapper__text"]}>
              Let's join forces, build powerful apps that leave a lasting
              impact.
            </p>
            <a
              rel="noreferrer"
              target="_blank"
              className={`${classes["cta-btn--resume"]} `}
              href="mailto:aadeshsingh146@gmail.com"
            >
              Reach Out <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </SectionWraper>
  );
};
export default Contact;
