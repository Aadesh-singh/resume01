import CompanyProject from "./CompanyProject";
import Project from "./Project";
import classes from "./CompanyProjects.module.css";
import ScrollTransitionWrapper from "./ScrollTransitionWrapper";
import SectionWraper from "./SectionWraper";

const PROJECTS = [
  {
    id: 1,
    title: "Cloudnito",
    description: `Cloudnito is a powerful cloud cost optimization app, built using Angular, Firebase, AWS Redshift, AWS Lambda, and Node.js. It not only provides real-time cost updates but also detects unusual anomalies and generates actionable recommendations to resolve them. Additionally, Cloudnito supports ChatGPT integration, enabling users to interact with the app through natural language queries, enhancing the overall user experience. With Cloudnito, users can ensure efficient cloud resource usage while staying ahead of any cost spikes or irregularities.`,
    liveUrl: "httpshttps://app.cloudnito.com/login",
    github: "",
    assetPath: "/images/cloudnito.png",
  },
  {
    id: 2,
    title: "Erkmo Analytics",
    description: `Erkmo Analytics is a cutting-edge, powerful app designed to provide real-time traffic analysis for connected applications. It supports a wide range of services, including dynamic form generation and hosting, as well as a dedicated service for managing social media, tracking events, and analyzing key metrics such as incoming traffic, bounce rate, and conversion rate. The app displays data beautifully using a variety of charts such as multi-axis charts, Pie chart, Bar graph and numerical representations, offering a comprehensive view of performance metrics. Built on Angular, Node.js, Express, Amazon Redshift, Firebase, Amazon S3, and AWS Lambda, Erkmo Analytics delivers robust, scalable solutions for traffic monitoring and analysis.`,
    liveUrl: "https://dashboard.erkmo.com/",
    github: "",
    assetPath: "/images/erkmo.png", //it takes from /public/images/crown_cloating.png
  },
];

const CompanyProjects = () => {
  //   console.log("Projects component is rendering");
  return (
    <SectionWraper id="company_projects">
      <section className={classes["projects-section"]}>
        <div className="container">
          <div className={classes["project-wrapper"]}>
            <h1 className={classes["section-title"]}>Company Projects</h1>
            {PROJECTS.length <= 0 && <p>No Projects available</p>}
            {PROJECTS.length > 0 &&
              PROJECTS.map((project) => (
                <ScrollTransitionWrapper key={project.id}>
                  <CompanyProject
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    liveUrl={project.liveUrl}
                    github={project.github}
                    assetPath={project.assetPath}
                  />
                </ScrollTransitionWrapper>
              ))}
          </div>
        </div>
      </section>
    </SectionWraper>
  );
};
export default CompanyProjects;
