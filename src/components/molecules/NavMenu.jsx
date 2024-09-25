import logoHeader from "../../assets/img/logos/logo.svg";
function NavMenu() {
  return (
    <div className="hidden md:flex w-full px-10 py-5 flex">
    <div className="w-1/5 flex items-center">
      <img src={logoHeader} alt="Logo de la empresa" className="logo" />
    </div>
    <nav className="w-4/5  flex">
      <ul className="navmenu ml-auto inline-grid grid-cols-4 xl:w-3/4 lg:w-4/5 grid-rows-1 gap-4 items-center">
        <li>
          <a href="#about">Sobre mí</a>
        </li>
        <li>
          <a href="#projects">Proyectos</a>
        </li>
        <li>
          <a href="#technologies">Tecnologías</a>
        </li>
        <li>
          <a href="#contact">Contacto</a>
        </li>
      </ul>
    </nav>
  </div>
  );
}
export default NavMenu;
