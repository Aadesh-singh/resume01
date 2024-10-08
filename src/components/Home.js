import About from "./About";
import CompanyProjects from "./CompanyProjects";
import Contact from "./Contact";
import Introduction from "./Intoduction";
import Projects from "./Projects";
import ScrollTransitionWrapper from "./ScrollTransitionWrapper";

const HomeComponent = () => {
  return (
    <>
      <ScrollTransitionWrapper>
        <Introduction />
      </ScrollTransitionWrapper>
      <ScrollTransitionWrapper>
        <About />
      </ScrollTransitionWrapper>
      {/* <ScrollTransitionWrapper> */}
      <CompanyProjects />
      <Projects />
      {/* </ScrollTransitionWrapper> */}
      <ScrollTransitionWrapper>
        <Contact />
      </ScrollTransitionWrapper>
    </>
  );
};
export default HomeComponent;
