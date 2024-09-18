import classes from "./Button.module.css";
const Button = (props) => {
  return (
    <a
      href="/resume.pdf" // Path to the resume file in the public folder
      download="Resume_Aadesh.pdf"
    >
      <button
        type={props.type}
        className={`${classes["cta"]} ${classes["hero-cta"]} ${classes["invert"]} ${props.className}`}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </a>
  );
};

export default Button;
