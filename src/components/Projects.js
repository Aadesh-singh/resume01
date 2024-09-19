import Project from "./Project";
import classes from "./Projects.module.css";
import ScrollTransitionWrapper from "./ScrollTransitionWrapper";
import SectionWraper from "./SectionWraper";

const PROJECTS = [
  {
    id: 1,
    title: "YTFlare",
    description: `YTFlare is a YouTube clone app that has been developed using ReactJS and Material UI. Its responsive design makes it accessible from any device or screen size, allowing users to enjoy their favorite videos anytime and anywhere. The app offers a seamless video streaming experience and promises to be the ultimate platform for entertainment enthusiasts. With YTFlare, users can explore a vast array of video content and indulge in a personalized viewing experience. \n FUN FACT: This project is fuled with aggression due to ads on youtube.`,
    liveUrl: "https://ytflare.vercel.app/",
    github: "https://github.com/Aadesh-singh/ytflare",
    assetPath: "/images/ytFlare.png",
  },
  {
    id: 2,
    title: "Crown Clothing",
    description: `Crown Clothing, a cutting-edge E Commerce App
              meticulously crafted using Node.js, React.js, MongoDB, Firebase With a sleek and intuitive UI, users can engage in
              and connect effortlessly. What sets Crown Cloathing apart
              is its easy Ui,
              ensuring a simplicity for users. Additionally,
              Crown Cloathing keeps users connected by displaying a variety of
              other options, fostering a sense of great Deals.`,
    liveUrl: "https://crwn-clothing-db-48885.firebaseapp.com/",
    github: "https://github.com/Aadesh-singh/crown-clothing",
    assetPath: "/images/crown_cloathing.png", //it takes from /public/images/crown_cloating.png
  },
  {
    id: 3,
    title: "BIGS Editor",
    description: `BIGS Editor, is a simple yet Powerful photo editing solution, presents a wealth of editing options including brightness control, inversion, saturation adjustments, rotation and more. Built with NodeJS, ExpressJS, EJS, HTML5, and CSS3, photo editing can be done from a web browser without the need for downloads.
Inclusion of a dark mode option reduces eye strain during late-night editing sessions.`,
    liveUrl: "https://bigseditor.vercel.app/",
    github: "https://github.com/Aadesh-singh/bigseditor",
    assetPath: "/images/bigs_editor.png",
  },
  {
    id: 4,
    title: "Qrify - A Qr Code Generator",
    description: `The Qrify - A Qr Code Generator app offers a solution for text sharing through its user-friendly interface that converts text into QR codes. Regardless of technology proficiency, the app simplifies the creation and sharing of QR codes, providing convenience and style in place of outdated methods. FUN-FACT: Motivation behind this project is Car Parking Problem 😣`,
    liveUrl: "https://qrify-teal.vercel.app/",
    github: "https://github.com/Aadesh-singh/qrify",
    assetPath: "/images/qrify.png",
  },
  {
    id: 5,
    title: "Key Press Validator",
    description: `Key Press Validator is a Developer tool, It is created with a sole purpose of contributing to developer community. It is created using HTML5, CSS3 and Javascript(ES6), It is a great tool to find out what key code is triggred when a Random key is presses in keyboard. It Provides a variety of metadata related to that specific key Press.`,
    liveUrl: "https://aadesh-singh.github.io/keyPress-validator/",
    github: "https://github.com/Aadesh-singh/keyPress-validator",
    assetPath: "/images/key_validator.png",
  },
];

const Projects = () => {
  console.log("Projects component is rendering");
  return (
    <SectionWraper id="projects">
      <section className={classes["projects-section"]}>
        <div className="container">
          <div className={classes["project-wrapper"]}>
            <h1 className={classes["section-title"]}>Personal Projects</h1>
            {PROJECTS.length <= 0 && <p>No Projects available</p>}
            {PROJECTS.length > 0 &&
              PROJECTS.map((project) => (
                <ScrollTransitionWrapper key={project.id}>
                  <Project
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
export default Projects;
