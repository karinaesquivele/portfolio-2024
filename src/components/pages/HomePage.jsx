import Banner from "../organisms/Banner";
import Projects from "../organisms/Projects";
import Technologies from "../organisms/Technologies";
import Contact from "../organisms/Contact";
function HomePage() {
  return (
    <div>
      <div id="about">
        <Banner />
      </div>

      <div id="projects">
        <Projects />
      </div>
      <div id="technologies">
        <Technologies />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default HomePage;
