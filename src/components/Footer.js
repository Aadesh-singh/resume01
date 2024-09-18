import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons/faAngleUp";
import {
  faLinkedin,
  faInstagram,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer id="footer" className={classes["footer-section"]}>
      <div className="container">
        <div className={classes["back-to-top-container"]}>
          <a
            rel="noreferrer"
            title="Back to Top"
            href="#intro"
            className={classes["back-to-top"]}
          >
            <FontAwesomeIcon icon={faAngleUp} />
          </a>
        </div>
        <div className={classes["socail-links"]}>
          <a
            rel="noreferrer"
            title="Linked in"
            href="https://www.linkedin.com/in/aadesh-singh-09575219b"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            rel="noreferrer"
            title="Instagram"
            href="https://www.instagram.com/thakur_aadesh_singh"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            rel="noreferrer"
            title="Github"
            href="https://github.com/Aadesh-singh"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            rel="noreferrer"
            title="Whatsapp"
            href="https://wa.me/+919354275363"
            target="_blank"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
        <hr />
        <p className={classes["footer__text"]}>Made with ❤️ by Aadesh Singh</p>
      </div>
    </footer>
  );
};
export default Footer;
