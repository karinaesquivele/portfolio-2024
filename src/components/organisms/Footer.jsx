import logo from "../../assets/img/logos/logo.svg";
import socialLinkedin from "../../assets/img/icons/icon-linkedin.svg";
import socialGithub from "../../assets/img/icons/icon-github.svg";
import socialBehance from "../../assets/img/icons/icon-behance.svg";
function Footer() {
  return (
    <footer className="w-full footer px-9">
      <div className="separator__row">
        <hr className="separator" />
      </div>
      <div className="w-full py-6 flex flex-col md:flex-row">
        <div className="footer__logo-col w-full md:w-1/4 md:p-0 pb-5">
          <img
            src={logo}
            alt="Logo de la empresa"
            className="m-auto md:mr-auto md:ml-0"
          />
        </div>
        <div className="footer__socials-col w-full md:w-1/4 pb-6 md:pb-0">
          <div className="socials">
            <a
              href="https://www.linkedin.com/in/karina-nayeli-esquivel-espinoza-761756196/"
              rel="noreferrer"
              className="inline-block mr-4"
              target="_blank"
            >
              <img src={socialLinkedin} alt="Ícono redondo LinkedIn" />
            </a>

            <a
              href="https://github.com/karinaesquivele"
              rel="noreferrer"
              className="inline-block mr-4"
              target="_blank"
            >
              <img src={socialGithub} alt="Ícono redondo Github" />
            </a>
            <a
              href="https://www.behance.net/karinaesquivele"
              rel="noreferrer"
              className="inline-block"
              target="_blank"
            >
              <img src={socialBehance} alt="Ícono redondo Behance" />
            </a>
          </div>
        </div>
        <div className="footer__menu-col w-full md:w-1/2">
          <ul className="footer-menu w-full grid-cols-2 grid-rows-2 inline-grid lg:grid-cols-4 lg:grid-rows-1 items-center">
            <li className="py-3 lg:p-0 md:p-0">
              <a href="#about">Sobre mí</a>
            </li>
            <li className="py-3 lg:p-0 md:p-0">
              <a href="#projects">Proyectos</a>
            </li>
            <li className="py-3 lg:p-0 md:p-0">
              <a href="#technologies">Tecnologías</a>
            </li>
            <li className="py-3 lg:p-0 md:p-0">
              <a href="#contact">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright__row">
        <p>© 2024 Karina Esquivel </p>
      </div>
    </footer>
  );
}
export default Footer;
