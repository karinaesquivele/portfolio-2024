import Banner from "../organisms/Banner";
import Projects from "../organisms/Projects";
import Technologies from "../organisms/Technologies";
import Contact from "../organisms/Contact";
function HomePage() {
  return (
    <div>
      <Banner id="about"/>
      <Projects id="projects" />
      <Technologies id="technologies"/>
      <Contact />
    </div>
  );
}

export default HomePage;