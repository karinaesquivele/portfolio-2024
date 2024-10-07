import Banner from "../organisms/Banner";
import Projects from "../organisms/Projects";
import Technologies from "../organisms/Technologies";
function HomePage() {
  return (
    <div>
      <Banner id="about"/>
      <Projects id="projects" />
      <Technologies id="technologies"/>
    </div>
  );
}

export default HomePage;