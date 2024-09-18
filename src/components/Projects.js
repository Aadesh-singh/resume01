import Project from "./Project";
import classes from "./Projects.module.css";
import ScrollTransitionWrapper from "./ScrollTransitionWrapper";
import SectionWraper from "./SectionWraper";

const PROJECTS = [
  {
    title: "Crown Clothing",
    description: `MountainWave Messenger, a cutting-edge messaging chat app
              meticulously crafted using Node.js, React.js, MongoDB, and
              Socket.io. With a sleek and intuitive UI, users can engage in
              instant conversations effortlessly. What sets MountainWave apart
              is its robust security feature—every message is encrypted,
              ensuring a fortress of privacy for users. Additionally,
              MountainWave keeps users connected by displaying a live roster of
              online users, fostering a sense of real-time community. Elevate
              your messaging experience with MountainWave Messenger—where
              seamless communication meets top-notch security.`,
    liveUrl: "https://crwn-clothing-db-48885.firebaseapp.com/",
    github: "https://github.com/Aadesh-singh/crown-clothing",
    assetPath: "/images/crown_cloathing.png",
    // assetPath: "../../public/assets/me.jpg",
  },
  {
    title: "Project 2",
    description: `MountainWave Messenger, a cutting-edge messaging chat app
              meticulously crafted using Node.js, React.js, MongoDB, and
              Socket.io. With a sleek and intuitive UI, users can engage in
              instant conversations effortlessly. What sets MountainWave apart
              is its robust security feature—every message is encrypted,
              ensuring a fortress of privacy for users. Additionally,
              MountainWave keeps users connected by displaying a live roster of
              online users, fostering a sense of real-time community. Elevate
              your messaging experience with MountainWave Messenger—where
              seamless communication meets top-notch security.`,
    liveUrl: "https://mountainwave-messenger.onrender.com/",
    github: "https://github.com/pranav043/mountainwave-messenger",
    assetPath: "/assets/project.jpg",
    // assetPath: "../../public/assets/me.jpg",
  },
];

const Projects = () => {
  return (
    <SectionWraper id="projects">
      <section id="projects" className={classes["projects-section"]}>
        <div className="container">
          <div className={classes["project-wrapper"]}>
            <h1 className={classes["section-title"]}>Projects</h1>
            {PROJECTS.length <= 0 && <p>No Projects available</p>}
            {PROJECTS.length > 0 &&
              PROJECTS.map((project) => (
                <ScrollTransitionWrapper>
                  <Project
                    key={project.title}
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
