import classes from "./Project.module.css";
const Project = (props) => {
  const { title, description, liveUrl, github, assetPath } = props;
  return (
    <div className="row">
      <div className="col-lg-4 col-sm-12">
        <div className={classes["project_wrapper__text"]}>
          <h3>{title}</h3>
          <div>
            <p className={`mb-4 ${classes["project_wrapper_para"]}`}>
              {description}
            </p>
          </div>
          {/* <div className={`${classes["btn-wrapper"]}`}> */}
          <a
            rel="noreferrer"
            target="_blank"
            className={`${classes["cta"]} ${classes["hero-cta"]} `}
            href={liveUrl}
          >
            See Live
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            className={`${classes["source"]} `}
            href={github}
          >
            Source Code
          </a>
          {/* </div> */}
        </div>
      </div>
      <div className="col-lg-8 col-sm-12">
        <div className={classes["project-wrapper__image"]}>
          <img className={classes["image"]} src={assetPath} alt={title} />
        </div>
      </div>
    </div>
  );
};
export default Project;
