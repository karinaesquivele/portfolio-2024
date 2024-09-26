import Typography from "../atoms/Typography";
import Button from "../atoms/Button";
import imageE from "../../assets/img/banners/img-banner-v1.png";

function Banner({ title, subtitle, description, buttonText }) {
  return (
    <div className="banner w-full md:w-11/12 md:ml-auto px-5">
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-1">
        {/* Columna de texto */}
        <div className="banner__col order-2 md:order-1 flex items-center justify-center px-8 md:px-0 lg:px-2 xl:px-6">
          <div className="md:text-left">
            <Typography variant="super-title">{title}</Typography>
            <Typography variant="super-subtitle">{subtitle}</Typography>
            <Typography variant="super-text">{description}</Typography>
            <div className="mt-9 md:mt-5">
              <Button variant="secondary" size="md">
                {buttonText}
              </Button>
            </div>
          </div>
        </div>
        {/* Columna de imagen */}
        <div className="banner__col order-1 md:order-2 text-center flex items-center justify-center mb-5 md:mb-0">
          <img src={imageE} alt="Banner" className="lg:w-3/5 md:w-4/5 w-3/5" loading="lazy" />
        </div>
      </div>
    </div>
  );
}

Banner.defaultProps = {
  title: "Karina Esquivel",
  subtitle: "FRONTEND DEVELOPER",
  description:
    "Soy Ingeniera en Tecnologías de la Información con 3 años de experiencia en Desarrollo Web FrontEnd. Mi enfoque está en diseñar y desarrollar interfaces llamativas centradas en la experiencia del usuario y la usabilidad.",
  buttonText: "Contacto",
};

export default Banner;
